
import "./Experience.css";

export default function Experience() {
    const experiences = [
        
        {
        date: "June 2025",
        title: "Admin of F&B (Food and Beverage) or Restaurant",
        details: [
            "Manage financial administration, taxation, and restaurant purchasing.",
            "Prepare daily reports of stock for ingredients and goods.",
            "Prepare employee attendance records and monthly payroll.",
            "Place orders for ingredients and goods as needed.",
            "Prepare banquet event orders and food tags.",
            "Assist in restaurant operations and customer service.",
            "Assist the restaurant cashier.",
            "Prepare monthly reports (profit and loss).",

        ],
        },
        {
        date: "December 2024",
        title: "Workshop BioCarbon Fund Initiative For Sustainable Forest Landscape (BioCF-ISFL): Development of Water Management and Water Balance for Plantation Land, Bogor, December 15-17, 2024",
        details: [
            "Participate in the workshop on BioCarbon Fund Initiative For Sustainable Forest Landscape (BioCF-ISFL): Development of Water Management and Water Balance for Plantation Land.",
            "Learn about water management and water balance in plantation land.",  
        ],
        },
                {
        date: "December 2024",
        title: "Peatland Synthesis for Water Management Development and Water Balance",
        details: [
            "FGD on Peatland and Administration Team: report or minutes", 
        ],
        },
        {
        date: "November 2024",
        title: "Field Companion for MBKM Village Training Camp 2024",
            details: [
                "Served as a mentor for the MBKM (Village Training Camp) program in Koto Kandis Dendang Village, Jambi, for 45 days under the theme \"Forest and Villages: Growing Together for a Greener Future.\"",
                "Acted as a teaching assistant throughout the program.",
                "Supervised and provided guidance to 13 MBKM students on site.",
                "Planned and designed a 45-day activity schedule for MBKM participants.",
                "Coordinated and evaluated the implementation of student activities.",
                "Managed meal budgeting and cost planning for the entire program.",
            
        ],
        },
        {
        date: "November 2024",
        title: "Application of Bio-nanofertilizers with Drone Seeding Technology in the Agroforestry System of Jelutung Rawa (Dyera polyphylla (Miq.) Steenis) and Rice (Oryza sativa L.) as an Effort for Peatland Rehabilitation",
        details: [
            "Part of the Socio-Economic Team; identified 30 socio-economic data points of the community in Koto Kandis Dendang Village, Jambi",
            "Identified the growth and development of plants in the field",
        ],
        },
        {
        date: "August 2024",
        title: "Bio-physical and Socio-economic Study of Potential Peatland Restoration Areas in August 2024 in Jambi Province",
            details: [
                "Conducted interviews to obtain information on the social, economic, and peatland management aspects from local communities or managing authorities.",
                "Performed vegetation analysis to identify plant species, vegetation structure, and biodiversity within the peatland ecosystem.",
        ],
        },
        {
        date: "August 2024",
        title: "Development of Spatial Planning (RTRW) Based on Sustainable Peatland Management in August 2024.",
            details: [
                "Part of the Socio-Economic Team; identifying socio-economic data in the self-managed forest area type II.",
                "Conducted interviews to obtain information on the social, economic, and peatland management aspects from local communities or managing authorities.",
        ],
        },
        {
        date: "July - September 2023",
        title: "KPHP Limau Unit VII Hulu Sarolangun",
        details: [
            "Conduct mapping using ArcGIS.",
            "Participate in the foster tree program meeting and the research and development of kepayang grafting.",
            "Participate in activities and data collection on planting and seedling at the location, as well as the socialization of facilitation and marketing product assistance for Social Forestry Business Groups (KUPS).",
            "Analyze the writing format of RPHJP for KPHP Limau Unit VII Hulu Sarolangun and the production of non-timber forest products from Forest Farmers Groups (KTH).",
            "Monitor and evaluate forest and land rehabilitation as well as productive fruit orchards in the Batin Batuah customary forest.",
            "Survey company locations within the KPHP Limau Unit VII Hulu Sarolangun area.",
        ],
        },
                {
        date: "October 2022 - March 2024",
        title: "Himaforesta",
            details: [
                "Active member of the Forestry Student Association (Himaforesta).",
                "Served in the Interest and Talent Division.",
                "Facilitated the development of students' interests and talents in both academic and non-academic fields.",],
        },
        {
        date: "December 2022",
        title: "Introduction to the Forestry Student Association Program )",
        details: [
                "Played a key role in designing, organizing, and ensuring the continuity of PPSHK activities in line with established objectives.",
                "Created a detailed event rundown for PPSHK, including schedule, location, and types of activities.",
                "Monitored and evaluated each session to ensure smooth event execution and alignment with goals.",],
        },
                
    ];

    return (
        <section id="experience">
            <div className="experience-container">
                <div className="title"><h2 data-aos="fade-up" >Experience</h2></div>
                <div className="timeline" data-aos="fade-up">
                    {experiences.map((exp, index) => (
                    <div className="timeline-item" key={index} >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <span className="timeline-date">{exp.date}</span>
                            <h3 className="timeline-title">{exp.title}</h3>
                            <ul>
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
