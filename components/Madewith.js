import Heading from "./Heading";
import style from "../styles/Madewith.module.css"

const Madewith = () => {
    return (
        <>
            <Heading heading="made with" />
            <div className={style.made_with_container}>
                <img src="/images/mongodb.svg" className={style.made_with_image}/>
                <img src="/images/express.svg" className={style.made_with_image}/>
                <img src="/images/nextjs.svg" className={style.made_with_image}/>
                <img src="/images/nodejs.svg" className={style.made_with_image}/>
                <img src="/images/flask.svg" className={style.made_with_image}/>
            </div>
        </>
    );
};

export default Madewith;
