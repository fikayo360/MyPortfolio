import Hero from "./hero"
import AboutMe from "./aboutMe"
import Contact from "./contact"
import Projects from "./projects"
import Navbar from "./nav"
import NavMobile from "./navMobile"
import './appStyles.css'
import 'animate.css';
import { useRef } from "react"

function Main(){
    const navContainerRef = useRef(null)
    const navMobileRef = useRef(null)

    const showNavMobile = () => {
        navContainerRef.current.classList.add('hide')
        navMobileRef.current.classList.add('show')
    } 

    const hideNavMobile = () => {
        navContainerRef.current.classList.remove('hide')
        navMobileRef.current.classList.remove('show')
    }

    return ( 
        <div id='cont' style={{backgroundImage:'url(./bg.jpeg)'}} >
        <Navbar showNavMobile={showNavMobile} navContainerRef={navContainerRef}/>
        <NavMobile hideNavMobile={hideNavMobile} navMobileRef={navMobileRef} />
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
       </div>       
    )
}

export default Main