import './appStyles.css'
import ProjectCarousel from './projectCarousel'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Project(){
    const location = useLocation();
    const { projectData } = location.state;
    let data = projectData

    useEffect(()=>{
        console.log(data)
    },[])

    return (
        <div id='projectCont'>
            <h1 id='projectHead'>{data.name}</h1>
           
            <ProjectCarousel images={data.images} />
            <p id='projectDescription'>
            {data.description}
            </p>
            <div id='ProjectLinks'>
               
                <Link to={data.github} as="div" className='socialIcon'>
                <img className='socialIconImg' src="./img/github.png" />
                </Link>

                {data.type === 'web'?
                (
                <Link to={data.url} as="div" className='socialIcon'>
                <img className='socialIconImg' src="./img/click.png" />
                </Link>
                ):null}

           
            </div>
       </div>
    )
}

export default Project