import './appStyles.css'

function Contact(){
return (
    <div id='contact'>
        <h1 id='contactMainTxt'>contact me</h1>
        <div id = 'contactWrap'>
            <div id='contactLeft'>
                <textarea id='input' name="comment" rows="10" cols="30" placeholder="send @fikayo a message"></textarea>
            <button id='submit'>submit</button>

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