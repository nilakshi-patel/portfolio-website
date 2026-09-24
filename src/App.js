import Navbar from "./components/NavBar/navbar";
import Intro from './components/Intro/intro';
import Skills from "./components/Skills/skills";
import LMS from "./components/LMS/lms";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Intro />
            <Skills />
            <LMS />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
