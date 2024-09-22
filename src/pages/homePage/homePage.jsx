import Landing from "../../components/Landing/landing.jsx";
import About from "../../components/About/about.jsx";
import Projects from "../../components/Projects/projects.jsx";
import Contact from "../../components/Contact/contact.jsx";
import Background from "../../components/Background/background.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";
import {StrictMode} from "react";

export default function HomePage() {
    return (
        <>
            <StrictMode>
                <Navbar/>
                <Landing />
                <About/>
                <Projects/>
                <Contact/>
                    <Background/>
            </StrictMode>
        </>
    );
}
