import './navStyles.css'
import { Link } from 'react-router-dom'

const Navbar = ({navContainerRef,showNavMobile}) => {
    return (
        <div ref={navContainerRef} className="navContainer">
            <div id="navWrap">
            <div id="navLeft">
                <h1 id="navName">@Fikayo</h1>
            </div>
            <div id="navRight">
            <div onClick={showNavMobile} id="navHimgCont">
                 <img id="navImg" src="./img/burger.png" />
            </div>
                <ul id="navList">
                    <li className="navListItems"><a className="listClass" href="#hero">Home</a></li>
                    <li className="navListItems"><a className="listClass" href="#about">About</a></li>
                    <li className="navListItems"><a className="listClass" href="#project">Project</a></li>
                    <li className="navListItems"><a className="listClass" href="#contact">Contact</a></li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar