import './MedSos.css';
import { BsInstagram } from "react-icons/bs";
import { PiTiktokLogoLight } from "react-icons/pi";
import { SlSocialLinkedin } from "react-icons/sl";

export default function MedSos() {
    const Line = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            width: 150
        }}
        />
);
    return (
        <div className="medsos" >
            <div className="line"><Line color='#Ebe2d8' /></div>
            <div className="instagram"><a href="https://www.instagram.com/tamarainf?igsh=MW95aTJ1ZXVvcnVtaw=="><BsInstagram size={23} color=' #Ebe2d8'/></a></div>
            <div className="linkedin"><a href="https://www.linkedin.com/in/tamara-inf-abb799348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><SlSocialLinkedin size={23} color=' #EFE1D1' /></a></div>
            <div className="tiktok"><a href="https://www.tiktok.com/@giuniara?_t=ZS-8y7mVEUoC2K&_r=1"><PiTiktokLogoLight size={23} color=' #Ebe2d8' /></a></div>
            <div className="line"><Line color='#Ebe2d8'/></div>
        </div>
    );
}   