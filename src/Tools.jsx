import './Tools.css';
import word from './assets/word.png';
import excel from './assets/excel.png';
import powerpoint from './assets/powerpoint.png';
import avenza from './assets/avenza.png';
import arcgis from './assets/arcgis.png';
import lightroom from './assets/lightroom.png';
import canva from './assets/canva.png';
import prezi from './assets/prezi.png';
import capcut from './assets/capcut.png';
import accurate from './assets/accurate.png';



export default function Tools() {
    const tools = [
        {
            link: "#",
            icon:word,
            name : "word",
        },
        {
            link: "#",
            icon: excel,
            name : "excel",
        },
        {
            link: "#",
            icon: powerpoint,
            name : "powerpoint",
        },
        {
            link: "#",
            icon: avenza,
            name : "avenza",
        },
        {
            link: "#",
            icon: arcgis,
            name : "arcgis",
        },
        {
            link: "#",
            icon: lightroom,
            name : "lightroom",
        },
        {
            link: "#",
            icon: canva,
            name : "canva",
        },
        {
            link: "#",
            icon: prezi,
            name : "prezi",
        },
        {
            link: "#",
            icon: capcut,
            name: "capcut",
            
        },
                {
            link: "#",
            icon: accurate,
            name: "accurate",
            
        },
    ]
    return (
        <>
            
            <section id="MyTools">
                <div className="title"><h2 data-aos="fade-up">Tools</h2></div>
                <div className="container" >
                    {tools.map((tool, index) => (
                        <div className="tool" key={index} data-aos="fade-up">
                            <a href={tool.link}><img src={tool.icon} alt={tool.name} /></a>
                        </div>
                    ))}
                </div>

            </section>
            

        </>
    );

}