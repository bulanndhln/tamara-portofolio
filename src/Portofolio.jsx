import './Portofolio.css';
import Slider from 'react-slick';
import magangkphp from './assets/magangkphp3.jpg';
import himaforesta from './assets/himaforesta.png';
import pkkmb from './assets/pkkmb.jpg';
import mbkm from './assets/mbkm.png';
import bionano from './assets/bionano.jpg';
import biophysical from './assets/biophysical.jpg';
import rtrw from './assets/RTRW.png';
import peatland from './assets/peatland.png';
import workshop from './assets/workshop.png';
import admin from './assets/admin.jpg';

const dataPorto = [
  { image: magangkphp, title: "KPHP Limau Unit VII Hulu Sarolangun" },
  { image: himaforesta, title: "Himaforesta" },
  { image: pkkmb, title: "Introduction to the Forestry Student Association Program" },
  { image: mbkm, title: "Field Companion for MBKM Village Training Camp 2024" },
  { image: bionano, title: "Application of Bio-nanofertilizers with Drone Seeding Technology in the Agroforestry System of Jelutung Rawa (Dyera polyphylla (Miq.) Steenis) and Rice (Oryza sativa L.) as an Effort for Peatland Rehabilitation" },
  { image: biophysical, title: "Bio-physical and Socio-economic Study of Potential Peatland Restoration Areas in August 2024 in Jambi Province" },
  { image: rtrw, title: "Development of Spatial Planning (RTRW) Based on Sustainable Peatland Management in August 2024." },
  { image: peatland, title: "Peatland Synthesis for Water Management Development and Water Balance" },
  { image: workshop, title: "Workshop BioCarbon Fund Initiative For Sustainable Forest Landscape (BioCF-ISFL): Development of Water Management and Water Balance for Plantation Land, Bogor, December 15-17, 2024" },
  { image: admin, title: "Admin of F&B (Food and Beverage) or Restaurant" },
];

export default function Portofolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true
  };

  return (
    <>
      
      <section id="MyPortofolio" className="myportofolio-section">
        <div className="title">
        <h2 data-aos="fade-up">Documentations</h2>
        </div>
        <div className="carousel-container">
          <Slider {...settings}>
            {dataPorto.map((item, index) => (
              <div className="carousel-item" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="desc">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
