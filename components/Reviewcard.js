import { Star } from "phosphor-react";
import style from "../styles/Reviewcard.module.css";
const Reviewcard = (props) => {
    return (
        <>
            <div className={style.review_card} style={{"borderLeft": `5px solid ${props.color}`}}>
                <div className={style.review_card_head}>
                    <div className={style.review_card_name}>
                        {props.firstname} {props.lastname}
                    </div>
                </div>
                <div className={style.review_card_body}>
                    {props.review}
                </div>
            </div>
        </>
    );
};

export default Reviewcard;
