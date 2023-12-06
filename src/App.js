import './App.css';
import Navbar from "./components/navbar/navbar.js"
import Home from "./components/Home/home.js"
import Contact from "./components/Contact/contact.js"
import Projects from "./components/Projects/projects.js"

function App() {
  return (
    <div className="App">
    <Navbar />
    <span id='HOME' className='anchor'></span>
    <Home />
    <span id='PROJECTS' className='anchor'></span>
    <Projects />
    <Contact />
    </div>
  );
}

export default App;