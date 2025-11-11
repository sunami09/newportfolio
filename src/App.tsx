import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import VideoStreaming from './pages/projects/VideoStreaming';
import Contact from './pages/Contact';
import Amazon2025 from './pages/experiences/Amazon2025';
import Microsoft2025 from './pages/experiences/Microsoft2025';
import Microsoft2024 from './pages/experiences/Microsoft2024';
import BerkeleyLab2023 from './pages/experiences/BerkeleyLab2023';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/experience/amazon2025" element={<Amazon2025 />} />
          <Route path="/experience/microsoft2025" element={<Microsoft2025 />} />
          <Route path="/experience/microsoft2024" element={<Microsoft2024 />} />
          <Route path="/experience/berkeleylab2023" element={<BerkeleyLab2023 />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/videoStreaming" element={<VideoStreaming />} />
          <Route path="/projects/ecommerce" element={<div>E-Commerce Project Details</div>} />
          <Route path="/projects/taskmanager" element={<div>Task Manager Project Details</div>} />
          <Route path="/projects/weather" element={<div>Weather Dashboard Project Details</div>} />
          <Route path="/projects/monitor" element={<div>Distributed Systems Monitor Project Details</div>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;