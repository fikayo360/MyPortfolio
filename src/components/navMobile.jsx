import { Link } from "react-router-dom"
import './navMobileStyles.css'
import { useInView } from 'react-intersection-observer';

const NavMobile = ({navMobileRef,hideNavMobile}) => {
    const [ref, inView] = useInView();

    return (
        <div ref={navMobileRef} className="navMobile" >
                <div id="navMhead">
                    <span id="navHtxt" ref={ref} className={`animate__animated ${inView?'animate__rubberBand':''}`}>FIKAYO</span>
                    <div id="navimCgCont" onClick={hideNavMobile}>
                        <img id="navclose" src="./img/close.png" />
                    </div>
                </div>
                <div id="navMBody">
                <ul id="navMBList">
                    <li onClick={hideNavMobile} className="navMBListItems"><a className="listClass" href="#hero">Home</a></li>
                    <li onClick={hideNavMobile} className="navMBListItems"><a className="listClass" href="#about">About</a></li>
                    <li  onClick={hideNavMobile} className="navMBListItems"><a className="listClass" href="#project">Project</a></li>
                    <li onClick={hideNavMobile} className="navMBListItems"><a className="listClass" href="#contact">Contact</a></li>
                </ul>
                </div>
            </div>
    )
}

export default NavMobile