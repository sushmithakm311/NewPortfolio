import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black text-white font-sans scroll-smooth min-h-screen w-full flex flex-col">
      <Home />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;