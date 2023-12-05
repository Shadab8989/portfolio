import './App.css';
import Navbar from "./components/navbar/navbar.js"
import Home from "./components/Home/home.js"
import About from "./components/About/about"
import Contact from "./components/Contact/contact.js"
import Projects from "./components/Projects/projects.js"
import Certificates from "./components/certificates/certificates"
import Resume from "./components/Resume/resume.js"

function App() {
  return (
    <div className="App">
    <Navbar />
    <span id='HOME' className='anchor'></span>
    <Home />
    {/* <Resume /> */}
    <span id='PROJECTS' className='anchor'></span>
    <Projects />
    {/* <About /> */}
    {/* <Certificates /> */}
    <Contact />
    </div>
  );
}

export default App;