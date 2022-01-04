import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/globals.css";
import Head from "next/head"

const myapp = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Image Caption Bot</title>
            </Head>
            <Navbar />
            <div className="page">
                <Component {...pageProps} className="page" />
            </div>
            <Footer/>
        </>
    );
};

export default myapp;
