import './appStyles.css'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact(){
    const [success,setSucess] = useState(false)
    const [notification,setNot] = useState('')
    const form = useRef();
    const clear = () => {
        setTimeout(()=>{
            setNot('')
        },5000)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_rmhtq3i', 'template_xbmg67d', form.current, '-s6cbcgwAZ_RR88P3')
        .then((result) => {
            console.log(result.text);
            setSucess(!success)
            setNot('email sent successfully')
            form.current.reset();
            clear()  

        }, (error) => {
            console.log(error.text);
            setSucess(false)
        });
    }

return (
    <div id='contact'>
        <h1 id='contactMainTxt'>contact me</h1>
        <div id = 'contactWrap'>
            <div id='contactLeft'>
            <form id='wrapForm' ref={form} onSubmit={handleSubmit}>
            <textarea id='input' name="message" rows="10" cols="30" placeholder="send @fikayo a message"></textarea>
            <button id='submit'>submit</button>
            <p id='not'> {notification} </p>
            </form>

            <div id='socialIcons'>
            <div className='socialIcon'>
            <img className='socialIconImg' src="./img/whatsapp.png" />
            <div className='socialsInfo'><h className='socialsInfoTxt'>07056070802</h></div>
            </div>
            <div className='socialIcon'>
            <img className='socialIconImg' src="./img/twitter.png" />
            <div className='socialsInfo'><h className='socialsInfoTxt'>@Fikayo109171022</h></div>
            </div>
            <div className='socialIcon'>
            <img className ='socialIconImg' src="./img/linkedin.png" />
            <div className='socialsInfo'><h className='socialsInfoTxt'>@Fikayo John</h></div>
            </div>
            <div className='socialIcon'>
            <img className ='socialIconImg' src="./img/instagram.png" />
            <div className='socialsInfo'><h className='socialsInfoTxt'>@fikayoadele</h></div>
            </div>
         </div>
            </div>
        </div>
       
       
    </div>
)
}

export default Contact