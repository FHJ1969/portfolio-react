import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return null;
};
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/homePage/homePage.jsx';
import Error from './pages/errorPage/errorPage.jsx';
import Projects from './pages/projectPage/projectPage.jsx';
import Navbar from './components/Navbar/navbar.jsx'

const App = () => (
    <Router>
        <ScrollToTop />
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

