import './appStyles.css'
import React, { useEffect, useRef } from 'react';
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import { useInView } from 'react-intersection-observer';

function AboutMe(){

const [text] = useTypewriter({
    words: ['html','css','javascript','React','React-native','NodeJs','expressJs','Databases','postgresql','mongodb','docker','web hosting','creative'],
    loop:{}
})

const [ref, inView] = useInView();

return (
    <div id='about'>
              <h1 id='aboutMainTxt'> aboutme</h1>
        <div id='aboutWrap'>
      
            <div id='aboutLeft'>
                <h1 id='aboutSkills'>{`# ${text} #`}</h1>
                <p id='aboutPara'>
                    i am a full stack developer with a passion for buliding beautiful and functional mobile and web applications. I have got 3 years of experience 
                    in the tech industry.
                    I am proficient in a couple of technologies including react native, react, nodejs, express and databases like postgresql and mongoDb,
                     also got some experience in deploying 
                    backend apps to the cloud.
                    I am confident that i have the skills and experience neccessary to be a valuable asset to your team. I look forward to hearinng from you soon.
                </p>
            </div>
            <div id='aboutRight' className={`animate__animated ${inView?'animate__bounce':''}`} ref={ref}>
                   <img id='aboutRightImg' src="./img/mkrem.png" />
            </div>
        </div> 
    </div>
)
}

export default AboutMe