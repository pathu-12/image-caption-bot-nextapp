import Heading from "./Heading";
import style from "../styles/Feedback.module.css";
import { useState } from "react";
import axios from "axios";

const Feedback = () => {
    const [feedbackdata, setFeedbackdata] = useState({
        firstname: "",
        lastname: "",
        review: "",
    });

    const clearFeedback = () =>{
        setFeedbackdata({
            firstname: "",
            lastname: "",
            review: ""
        })
    }

    const handleFeedback = async (e) =>{
        e.preventDefault();
        const {firstname, lastname, review } = feedbackdata;
        try{
            const request = await axios.post(`https://image-caption-bot-nodejs.herokuapp.com/reviews`,{
                firstname, lastname, review
            });
            const data = request.data;
            console.log(data);
        }
        catch(e){
            console.log(e.messege);
        }
        finally{
            clearFeedback();
        }
    }

    return (
        <>
            <Heading heading="submit feedback"/>
            <form className={style.review_form} onSubmit={handleFeedback} autoComplete="off">
                <div className={style.form_input}>
                    <label htmlFor="firstname">first name</label>
                    <input
                        type="text"
                        name="firstname"
                        value={feedbackdata.firstname}
                        onChange={(e) =>
                            setFeedbackdata({
                                ...feedbackdata,
                                firstname: e.target.value,
                            })
                        }
                    />
                </div>
                <div className={style.form_input}>
                    <label htmlFor="lastname">last name</label>
                    <input
                        type="text"
                        name="lastname"
                        value={feedbackdata.lastname}
                        onChange={(e) =>
                            setFeedbackdata({
                                ...feedbackdata,
                                lastname: e.target.value,
                            })
                        }
                    />
                </div>
                <div className={style.form_input}>
                    <label htmlFor="review">review</label>
                    <textarea
                        rows={4}
                        name="review"
                        value={feedbackdata.review}
                        onChange={(e) =>
                            setFeedbackdata({
                                ...feedbackdata,
                                review: e.target.value,
                            })
                        }
                    />
                </div>
                <div className={style.form_input}>
                    <button type="submit" name="submit">
                        submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Feedback;
