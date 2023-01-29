import * as React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import logo from './logo.svg';
// import lilypadlogo from './lilypadlogo.png';
import './App.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>

function App() {
  return(
    <div>
    
      <div id="navigation">
        <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </Router>
      </div>
    </div>
    
  )

}


export default App;

