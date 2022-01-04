import style from "../styles/Reviews.module.css";
import Heading from "./Heading";
import Reviewcard from "./Reviewcard";
import axios from "axios";
import { useState, useEffect } from "react";

const colors = ["#A3CB38","#FFC312","#12CBC4"];

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
   
    useEffect(() => {
        const getdata = async () =>{
            const response = await axios.get("https://image-caption-bot-nodejs.herokuapp.com/reviews");
            const data = await response.data;
            setReviews(data);
        }
        getdata();
        console.log(reviews);
    }, []);
    return (
        <>
            <Heading heading="reviews"/>
            <div className={style.reviews}>
               {
                  reviews.slice(-3).map((ele,index) =>{
                      return <Reviewcard key={ele._id} firstname={ele.firstname} lastname={ele.lastname} review={ele.review} color={colors[index]}/>
                  })
               }
            </div>
        </>
    )
}

export default Reviews
