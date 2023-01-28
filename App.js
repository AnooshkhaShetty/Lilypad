import logo from './logo.svg';
import pho from './pho.jpeg';
import lilypadlogo from './lilypadlogo.png';
import './App.css';

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>

function App() {
  return(
    <div>
      <div id="navigation">
        <h1>LilyPad</h1>
      </div>
      <div id="intro">
        <div>
          {" "}
          <img width="200px" src={lilypadlogo} alt="logo" />{" "}
        </div>
        <h2> Welcome to Lilypad!</h2>

        <div>
        <p class="section">
          <h3 class="section-header"> <b> Our Mission: </b></h3>
          <br />
          Our goal is to provide access to food and reduce food waste in the Westwood area. 
          <b>We connect local businesses and organizations to students and others who love free food.</b>
        </p>
        </div>

        <div>
        <p class="section">
          <h3 class="section-header"> <b> How it Works: </b></h3>
          <br />
          Simply browse the selection below of local organizations in your local area to see who is participating in our program. <br />
          All our providers have graciously decided to give back to the local community, and have listed their offerings on their listing.
          Simply click on the listing you are interested in to access more information, and use the provided contact information for any further questions!

        </p>
        </div>
      </div>
    </div>
  )

}


export default App;
