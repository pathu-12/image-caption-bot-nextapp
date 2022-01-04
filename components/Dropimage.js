import style from "../styles/Dropimage.module.css";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import Loader from "react-loader-spinner";
import Heading from "./Heading"
import Link from "next/link"


const Dropimage = () => {
    const [file, setFile] = useState(null);
    const [uploaded, setUploded] = useState(false);
    const [spin, setSpin] = useState(true);
    const [caption, setCaption] = useState("")
    const [captionarea, setCaptionarea] = useState(true);
    const fileTypes = ["JPG"];
    const get_caption = async (file) => {
        const data = new FormData();
        setUploded(true);
        setSpin(false);
        data.append("file", file);
        try {
            const request = await axios.post(
                "http://127.0.0.1:9000/predict",
                data
            );
            const caption_text = await request.data.prediction;
            setCaption(caption_text)
            setSpin(true);
            setCaptionarea(false);
        } catch (e) {
            console.log(e);
            setSpin(true);
        }
    };
    const handleChange = (image) => {
        setFile(image);
        console.log(image);
        get_caption(image);
    };
    const clear_prediction = (e) =>{
        e.preventDefault();
        setCaptionarea(true);
        setUploded(false);
    }
    return (
        <>
            <Heading heading="upload image"/>
            {uploaded || (
                <div className={style.dropimage_container}>
                    <FileUploader
                        handleChange={handleChange}
                        name="file"
                        types={fileTypes}
                    />
                </div>
            )}
            {
                spin||(
                    <div className={style.dropimage_container}>
                       <div className={style.spin_area}>
                        <div className="waiting_text">
                                Please wait we are processing your image
                            </div>
                        <div className="spinner">
                                <Loader type="Bars" color="#000000" height={40} width={40} />
                        </div>
                        </div>
                    </div>
                )
            }
            {
                captionarea || (
                    <div className={style.dropimage_container}>
                        <div className={style.prediction_container}>
                            <img src={URL.createObjectURL(file)} className={style.input_image}/>
                            <div className={style.image_caption}>
                                {caption}
                            </div>
                            <div className={style.reset_div}>
                                Click <a href="/predict" onClick={clear_prediction}>here</a> to predict another image
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Dropimage;
