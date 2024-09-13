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
