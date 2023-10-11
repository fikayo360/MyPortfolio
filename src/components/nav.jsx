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
                    <li className="navListItems"><a className="listClass" href="#hero">Home</a></li>
                    <li className="navListItems"><a className="listClass" href="#about">About</a></li>
                    <li className="navListItems"><a className="listClass" href="#project">Project</a></li>
                    <Link className="navListItems" to="/blogHome" as="li">
                    <a className="listClass">Blog</a>
                    </Link>
                    <li className="navListItems"><a className="listClass" href="#contact">Contact</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar