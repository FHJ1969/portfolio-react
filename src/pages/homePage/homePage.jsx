import { lazy, Suspense } from 'react';

const Background = lazy(() => import('/src/components/Background/background.jsx'));
const Landing = lazy(() => import('/src/components/Landing/landing.jsx'));
const About = lazy(() => import('/src/components/About/about.jsx'));
const Projects = lazy(() => import('/src/components/Projects/projects.jsx'));
const Contact = lazy(() => import('/src/components/Contact/contact.jsx'));

function HomePage() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Landing />
                <About />
                <Projects />
                <Contact />
                <Background />
            </Suspense>
        </>
    );
}

export default HomePage;
