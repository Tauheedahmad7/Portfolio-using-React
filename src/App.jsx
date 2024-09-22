import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
