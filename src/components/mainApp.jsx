import Hero from "./hero"
import AboutMe from "./aboutMe"
import Contact from "./contact"
import Projects from "./projects"
import './appStyles.css'

function Main(){
    return ( 
        <div id='cont'>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
       </div>
    )
}

export default Main