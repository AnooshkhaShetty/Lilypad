import logo from './logo.svg';
import lilypadlogo from './lilypadlogo.png';
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
        <h1>Lilypad</h1>
      </div>

      <div class = "logo-box">
        <img width="400px" src={lilypadlogo} alt="logo" />{" "}
      </div>

        <div class="section-row">
        <div class="flip-card">
        <div class="flip-card-inner">

        <div class="flip-card-front">
          <h3 class="section-header"> <b> Our Mission </b></h3>
        </div>
        <button type="button" onClick={addSomething}> ADD SMTH</button>
        <button type="button" onClick={getSomething}> GET SMTH</button>
        <div class="flip-card-back">
          Our goal is to provide access to food and reduce food waste in the Westwood area.
          <b> We connect local businesses and organizations to students and others who love free food.</b>
        </div>

        </div>
        </div>


        <div class="flip-card">
        <div class="flip-card-inner">

        <div class="flip-card-front">
          <h3 class="section-header"> <b> How it Works </b></h3>
        </div>

        <div class="flip-card-back">
          Simply browse the selection below of local organizations in your local area to see who is participating in our program. 
          All our providers have graciously decided to give back to the local community, and have listed their offerings on their listing.
          Simply click on the listing you are interested in to access more information, and use the provided contact information for any further questions!
        </div>

        </div>
        </div>


        <div class="flip-card">
        <div class="flip-card-inner">
        
        <div class="flip-card-front">
          <h3 class="section-header"> <b> For organizations </b></h3>
        </div>

        <div class="flip-card-back">
          If interested in creating a listing for you excess food, simply create a vendor account and write a listing. By specifying
          a time and place you can provide the food. We would appreciate listing any possible allergens and menu items. Thank you for your support!
        </div>

        </div>
        </div>

        </div>
    </div>
  )

}


export default App;
