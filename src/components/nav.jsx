import './navStyles.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div id="navContainer">
            <div id="navWrap">
            <div id="navLeft">
                <h1>Fikayo</h1>
            </div>
            <div id="navRight">
                <ul id="navList">
                    <li className="navListItems"><a href="#hero">Home</a></li>
                    <li className="navListItems"><a href="#about">About</a></li>
                    <li className="navListItems"><a href="#project">Project</a></li>
                    <Link className="navListItems" to="/blogHome" as="li">
                    <a>Blog</a>
                    </Link>
                    <li className="navListItems"><a href="#contact">Contact</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar