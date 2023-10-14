import './blogHome.css'
import moment from "moment";
import { Link } from 'react-router-dom'

const Post = ({data}) => {
    
    function truncateText(text, maxLength) {
        if (text.length <= maxLength) {
          return text;
        }
      
        return text.slice(0, maxLength) + "...";
      }

    return (
         <Link id="singleBlogComponent" to="/blogTopic" as="div" state={{ postData:data }}>
                    <div id="blogComponentLeft">
                        <span id="blogComponentLeftDate">
                            {moment(data.createdAt.slice(0,10)).format("MMMM Do, YYYY")}
                        </span>
                        <h1 id="blogComponentLeftHeader"> {data.postTitle} </h1>
                        <p id="blogComponentLeftP">
                        {
                            truncateText(data.postBody,300)
                        }
                        </p>
                    </div>
                    <div id="blogComponentRight">
                     <div id="imgContainer">
                        <img id="imgg" src={data.postImg} />
                     </div>
                    </div>
                </Link>
    )
}

export default Post