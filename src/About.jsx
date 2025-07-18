import './About.css'
import './MyButton.jsx'
import MyButton from './MyButton.jsx'; 
import myFoto from './assets/me.jpg'
import MedSos from './MedSos.jsx';
import { VscFile } from "react-icons/vsc";

export default function About() { 
    return (
        <>
            <div className="wrapper">
                <section id="about">
                    <div className="container">
                        <div className="aboutMe">
                            <span>Hello, my name is</span>
                            <h1>Tamara Islahunnufus</h1>
                            <p>A Forestry graduate from the University of Jambi with hands-on experience in forest management and
                                a strong commitment to environmental sustainability. Highly interested in field activities and systems
                                such as observation, research, and GIS-based mapping to support data-driven decision-making.
                                Possesses strong analytical skills, particularly in socioeconomics, and is known for being punctual,
                                responsible, collaborative, quick to learn, and motivated to grow in dynamic environments.</p>
                            <div className="cv"> <span><MyButton link="https://drive.google.com/file/d/1ZoAJ7AbPnFuViqzoGyKq6SP06sGtkOux/view?usp=drivesdk"> cv <VscFile size={15} style={{ paddingTop:"8px" }} /></MyButton></span></div>
                        </div>
                    </div>
                </section>
                <aside>
                    <div className="foto">
                        <img src={myFoto} alt="bulann" />
                    </div>
                </aside>
            </div>
            <MedSos/>
        </>
    )
}
