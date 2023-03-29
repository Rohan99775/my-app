import React from 'react';
import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from './Components/Header';
import About from './Components/About';
import Skill from './Components/Skill';
import Education from './Components/Education';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Blog from './Components/Blog';
import Footer from './Components/Footer';


function App() {

  return (
    <div className="App">
      <Header />
      <About />
      <Skill />
      <Education />
      <Services />
      <Testimonials />
      <Blog />
      <Footer />
    </div >
  );
}

export default App;
