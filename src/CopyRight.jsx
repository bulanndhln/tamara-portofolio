import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import CSS AOS

export default function CopyRight() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Durasi animasi (ms)
            once: true, // Animasi hanya muncul sekali
        });
        console.log("AOS initialized"); // Debugging
    }, []);

    const styles = {
        textAlign: "center",
        fontSize: "14px",
        color: "#Ebe2d8",
        marginBottom: "50px",
        //marginTop: "200px", // Tambahkan margin agar efek fade-up terlihat
    };

    return (
        <div style={styles} >
            <p data-aos="fade-up">© {new Date().getFullYear()} Tamara Islahunnufus. All rights reserved.</p>
        </div>
    );
}
