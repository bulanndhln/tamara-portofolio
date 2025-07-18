import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS
import './App.css';
import About from './About.jsx';
import Navbar from './Navbar.jsx';
import Portofolio from './Portofolio.jsx';
import Experience from './Experience.jsx';
import Tools from './Tools.jsx';
import Line from './Line.jsx';
import Contact from './Contact.jsx';
import Copyright from './CopyRight.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi (ms)
            once: true, // Animasi hanya muncul sekali saat pertama kali terlihat
        });
    }, []); // Hanya dijalankan sekali saat pertama kali render

    return (
        <>
            <Navbar />
            <About />
            <Line />
            <Portofolio />
            <Line />
            <Experience />
            <Line />
            <Tools />
            <Line />
            <Contact />
            <Line />
            <Copyright />
        </>
    );
}
