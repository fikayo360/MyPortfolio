import Main from "./components/mainApp"
import Project from "./components/project"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  </Router>
  )
}

export default App
