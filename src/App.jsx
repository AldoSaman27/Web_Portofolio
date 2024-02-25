import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import About from './Pages/About';
import Skill from './Pages/Skill';
import Project from './Pages/Project';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from './Pages/Contact';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skill' element={<Skill/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
