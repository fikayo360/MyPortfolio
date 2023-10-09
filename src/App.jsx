import Main from "./components/mainApp"
import Project from "./components/project"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogHome from "./components/blogHome";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:5000/';

function App() {
  return (
    <BlogHome/>
  //   <Router>
  //   <Routes>
  //     <Route path="/" element={<Main />} />
  //     <Route path="/project" element={<Project />} />
  //   </Routes>
  // </Router>
  )
}

export default App
