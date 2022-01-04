import style from "../styles/Navbar.module.css";
import Link from "next/link";
import { List } from "phosphor-react";

const Navbar = () => {
    const toggler = () => {
        console.log("clicked me");
        const toggle_nav = document.querySelector("#mobile_navbar");
        toggle_nav.classList.toggle("mobile_navbar_toggled");
    };
    return (
        <>
            <div className="website_navbar">
                <div className={style.navbar}>
                    <div className={style.navbar_left}>
                        <div className={style.navbar_logo}>
                            <Link href="/" className="logo_link">
                                CaptionBot
                            </Link>
                        </div>
                    </div>
                    <div className={style.navbar_right}>
                        <div className={style.nav_links} id="mobile_navbar">
                            <Link href="/" className={style.nav_link}>
                                home
                            </Link>
                            <Link href="/predict" className={style.nav_link}>
                                predict
                            </Link>
                            <Link href="/feedback" className={style.nav_link}>
                                feedback
                            </Link>
                        </div>
                        <List
                            size={32}
                            color="#ffffff"
                            weight="thin"
                            className={style.navbar_toggle_icon}
                            onClick={toggler}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
