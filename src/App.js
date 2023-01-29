import * as React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import logo from './logo.svg';
// import lilypadlogo from './lilypadlogo.png';
import './App.css';
import {db} from './config.js';
import { doc, setDoc, getDoc } from "firebase/firestore"; 

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>

const addSomething = async () => {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "sellers", "Ashish"), {
    name: "Ashish",
    state: "CA",
    country: "USA",
    selling: {"radashishes": 12}
  });
}
const getSomething = async () => {
  const docRef = doc(db, "sellers", "Ashish");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    alert(docSnap.data().selling.radashishes)
  } else {
    alert("no doc :(")
  }
}

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

