import './Navbar.css';
export default function Navbar() { 
    return (
        <nav>
            <div className="navbar">
                <a href="#about"><h2>Tamara</h2></a>
                <div className="navRight">
                <a href="#MyTools">Tools</a>
                <a href="#experience">Experience</a>
                <a href="#MyPortofolio">Documentations</a>
                <a href="#about">About</a>
                </div>
            </div>
        </nav>

    );
}
