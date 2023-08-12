import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

function App() {
  return (
    <>
    <Router>
     <Navbar /> 
     <Routes>
     <Route path='/' Component={Home} />
     <Route path='/skills' Component={Skills} />
     <Route path='/projects' Component={Projects} />
     <Route path='/contact' Component={Contact} />
     </Routes>
    </Router>
    </>
  );
}

export default App;
