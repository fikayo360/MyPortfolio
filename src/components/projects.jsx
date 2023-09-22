import './appStyles.css'
import { projects } from '../projects/projects'
import { Link } from 'react-router-dom'

function Projects(){
    return (
        <div id='project'>
            <h1 id='projectMainTxt'> projects</h1>
            <div className="projectWrap">
                {projects.map((item)=>(
                   <Link id='projectImgWrap' to="/project" as="div"  state={{ projectData:item }}>
                     <h id='projectName'>{item.name}</h>
                     <img id='projectImg' src={item.coverImg} />
                     </Link>
                ))}
               
            </div>
        </div>
    )
}
export default Projects