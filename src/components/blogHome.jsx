import axios from 'axios';
import './blogHome.css'
import { useState,useEffect } from 'react';
import Post from './post';

const BlogHome = () => {
    const [posts,setPosts] = useState([])

      const fetchBlogPosts = async() => {
        try{
            const blogPosts = await axios.get('api/v1/post/postByUser')
            console.log(blogPosts.data.length)
            const posts = blogPosts.data
            setPosts(posts)
            console.log(posts.length)
        }catch(err){
            console.log(err.response.data)
        }
      }

      useEffect(()=>{
        fetchBlogPosts()
      },[])

    return (
         <div id="mainBody">
            <div id="header">
                <span >FIKAYO'S DIGEST</span>
                <div id="headerRight">
                
                </div>
            </div>

            <div id="blogHero">
                <h1 id="blogHeroH"> hi i am fikayo! welcome to my world</h1>
                <p id="blogHeroP">I'm a software developer with a passion for building useful and innovative products. 
                I'm also a big fan of open source software and sharing knowledge with others.</p>
            </div>

            <section id="blogBody">
                <span id="topics">Topics</span>
                <div id="blogsWrapper">
                    {
                        posts &&
                        posts.map((post) => (
                            <Post data={post}/>
                        ))
                    }
                </div>
            </section>
         </div>
    )
}

export default BlogHome