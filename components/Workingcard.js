import style from "../styles/Howitworks.module.css";

const Workingcardeven = (props) => {
    return (
        <>
            <div className={style.working_card}>
                <div className={style.working_card_content, style.working_content}>
                    <div className={style.working_card_heading}>
                        {props.title}
                    </div>
                    <div className={style.working_card_body}>
                       {props.content}
                    </div>
                </div>
                <div className={style.working_card_number}>0{props.number}</div>
            </div>
        </>
    );
};

const Workingcardodd = (props) => {
    return (
        <>
            <div className={style.working_card}>
                <div className={style.working_card_number}>0{props.number}</div>
                <div className={style.working_card_content}>
                    <div className={style.working_card_heading}>
                        {props.title}
                    </div>
                    <div className={style.working_card_body}>
                        {props.content}
                    </div>
                </div>
            </div>
        </>
    );
};

export { Workingcardeven, Workingcardodd };
