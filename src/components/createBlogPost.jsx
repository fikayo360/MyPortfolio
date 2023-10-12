import './createBlogPost.css'
import axios from 'axios'
import { useState } from 'react'
import { useRef } from 'react'



const CreateBlogPost = () => {
    const [username,setUserName] = useState("")
    const [password,setPassword] = useState("")
    const [currentUser,setCurrentUser] = useState("")
    const [error,setError] = useState("")
    const [postTitle,setPostTitle] = useState("")
    const [postBody,setPostBody] = useState("")
    const containerRef = useRef(null);
    const authContainerRef = containerRef.current
    const preset_key = "lpkrccr4"
    const cloud_name = "dixzftihq"
    const [image, setImage] = useState(null)
    const [not,setNot] = useState("")
    const [token,setToken] = useState("")
    

    function handleFile(e){
       const file =  e.target.files[0]
       const formData = new FormData()
       formData.append('file',file)
       formData.append('upload_preset',preset_key)
       axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,formData)
       .then(res => setImage(res.data.secure_url))
       .catch(err => console.log(err))
    }
  
    const auth = async(e) => {
        e.preventDefault()
        let formData = {username,password}
        try{
            const response = await axios.post('api/v1/user/login',formData)
            console.log(response)
            const user = response.data.tokenUser
            const tok = response.data.token
            setCurrentUser(user)
            setToken(tok)
            setUserName("")
            setPassword("")
            setError("")
            authContainerRef.classList.add('hide')
        }catch(err){
            console.log(err.response.data)
            setError(err.response.data)
        }
    }

    function clearNot(){
        setTimeout(()=>{
        setNot("")
        },5000)
    }

    const createPost = async(e) => {
        e.preventDefault()
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        let formData = {userId:currentUser._id,postAuthour:currentUser.username,postImg:image,postTitle,postBody}
        console.log(formData)
        try{
            const response = await axios.post('api/v1/post/publish',formData)
            console.log(response)
            const n = response.data
            setNot(n)
            clearNot()
            setImage('')
            setPostBody('')
            setPostTitle('')
        }
        catch(err){
            console.log(err.response.data)
        }
    }

    return (
        <div id="createWrap">
            <div ref={containerRef} className="authWrap">
                <div id="authContainer">
                    <form id="authForm" onSubmit={auth}>
                        <h1>login</h1>
                        <input type="text" className="inputs" placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)} />
                        <input type="password" className="inputs" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        <button id="authFormSubmit">submit</button>
                    </form>

                    {error?<span id="error">{error}</span>:null}
                </div>
            </div>
           <div id="createHeader">
                <span >FIKAYO'S DIGEST</span>
                <div id="createHeaderRight">
                <img id='createSpanner' src="./img/spanner.png" />
                </div>
            </div> 
            <div id="createBody">
                <h1>create post</h1>
                <form onSubmit={createPost}>
                    <input type='text' className='createForms' value={postTitle} onChange={(e)=>setPostTitle(e.target.value)} placeholder="post title" />
                    <textarea className='createForms'  name="post body" value={postBody} onChange={(e)=>setPostBody(e.target.value)} rows="10" cols="30" placeholder="post body"></textarea>
                    <input type="file" onChange={handleFile}/>
                    <button>submit</button>
                </form>
                {not?<span id="not">{not}</span>:null}
            </div>
        </div>
    )
}

export default CreateBlogPost