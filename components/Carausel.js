import style from "../styles/Carausel.module.css";
import Link from "next/link";

const Carausel = () => {
    return (
        <>
            <div className={style.carausel_container}>
                <div className={style.carausel_left}>
                    <div className={style.carausel_heading}>
                        Image Caption Bot
                    </div>
                    <div className={style.carausel_heading_body}>
                        a deep learning based image captioning bot.
                    </div>
                    <div className={style.carausel_heading_subbody}>
                        click on below button to predict caption for your image
                    </div>
                    <div className={style.carausel_link}>
                        <Link href="/predict">predict now</Link>
                    </div>
                </div>
                <div className="carausel_right">
                    <img src="/images/carausel_image.png" alt="" className={style.carausel_image}/>
                </div>
            </div>
        </>
    )
}

export default Carausel
