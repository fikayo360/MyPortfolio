import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
import './blogTopic.css'

const BlogTopic = () => {
    const location = useLocation();
    const { postData } = location.state;
    let data = postData
    useEffect(()=>{
      console.log(data)
    },[])

    return (
        <div id="topicWrap">
           <div id="topicWrapHeader">
                <span >FIKAYO'S DIGEST</span>
                <div id="topicheaderRight">
                <img id='topicspanner' src="./img/spanner.png" />
                </div>
            </div>

            <div id="topicWrapTitles">
            <h1>{data.postTitle}</h1>
            <h2>{moment(data.createdAt.slice(0,10)).format("MMMM Do, YYYY")}</h2>
            </div>
        
           <div id="topicImgWrap">
           <div id="topicImgContainer">
              <img id="topicImg" src={data.postImg}/>
            </div>
           </div>
          
            <div id="topicBodyContainer">
            <p id="topicBody">{data.postBody}</p>S
            </div>
            
           
        </div>
     )
}

export default BlogTopic