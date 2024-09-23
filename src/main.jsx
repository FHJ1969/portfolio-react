/*
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Background from './components/Background/background.jsx'
import Landing from './components/Landing/landing.jsx'
import Navbar from "./components/Navbar/navbar.jsx";
import About from './components/About/about.jsx'
import Projects from "./components/Projects/projects.jsx";
import Contact from './components/Contact/contact.jsx'
import './index.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar />
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
        <Background />
  </StrictMode>,
)
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/homePage.jsx';
import Error from './pages/errorPage/errorPage.jsx';
import Projects from './pages/projectPage/projectPage.jsx';
import ScrollTop from './components/utils/ScrollToTop.jsx';
import Navbar from './components/Navbar/navbar.jsx'

const App = () => (
    <Router>
        <ScrollTop />
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
        </Routes>
    </Router>
);

// Génération du DOM selon l'url de la page
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

