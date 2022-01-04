import style from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <div className={style.footer}>
                <div className={style.footer_heading}>
                    ml bigdata internship
                </div>
                <div className={style.footer_subheading}>
                    created by
                </div>
                <div className={style.creators_names}>
                    <Link href="/"><a>deep zaveri</a></Link>
                    <Link href="/"><a>kanika singh</a></Link>
                    <Link href="/"><a>pradeep patel</a></Link>
                    <Link href="/"><a>prathamesh khochade</a></Link>
                </div>
            </div>
        </>
    );
};

export default Footer;
