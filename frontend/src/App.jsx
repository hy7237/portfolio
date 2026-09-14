import Home from "./pages/Home"
import Navbar from "./components/navbar"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/project"
import Experience from "./pages/experience"
import Contact from "./pages/contact"
import Codingprofile from "./pages/codingprofile"


function App() {
  

  return (
    <div>
     <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Codingprofile/>
      <Contact/>
    </div>
  );
}


export default App
