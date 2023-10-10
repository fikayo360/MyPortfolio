import Main from "./components/mainApp"
import Project from "./components/project"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogHome from "./components/blogHome";
import BlogTopic from "./components/blogTopic";
import CreateBlogPost from "./components/createBlogPost";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:5000/';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/project" element={<Project />} />
      <Route path="/blogHome" element={<BlogHome/>} />
      <Route path="/blogTopic" element={<BlogTopic/>} />
      <Route path="/createBlogPost" element={<CreateBlogPost/>} />
    </Routes>
  </Router>
  )
}

export default App
