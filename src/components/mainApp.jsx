import Hero from "./hero"
import AboutMe from "./aboutMe"
import Contact from "./contact"
import Projects from "./projects"
import Navbar from "./nav"
import './appStyles.css'

function Main(){
    return ( 
        <div id='cont'>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
       </div>
    )
}

export default Main