import React from "react";
  

const Home = () => {
    return (
      <div>
        <h1>Lilypad</h1>
        <div>
        {/* <img id = "logo-box" width="400px" src={lilypadlogo} alt="logo" />{" "} */}
      </div>

        <div class="section-row">
        
        <div class="flip-card">
        <div class="flip-card-inner">

        <div class="flip-card-front">
          <h3 class="section-header"> <b> Our Mission: </b></h3>
        </div>

        <div class="flip-card-back">
          Our goal is to provide access to food and reduce food waste in the Westwood area.
          <b> We connect local businesses and organizations to students and others who love free food.</b>
        </div>

        </div>
        </div>


        <div class="flip-card">
        <div class="flip-card-inner">

        <div class="flip-card-front">
          <h3 class="section-header"> <b> How it Works: </b></h3>
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
          <h3 class="section-header"> <b> For organizations: </b></h3>
        </div>

        <div class="flip-card-back">
          If interested in creating a listing for you excess food, simply create a vendor account and write a listing. By specifying
          a time and place you can provide the food. We would appreciate listing any possible allergens and menu items. Thank you for your support!
        </div>

        </div>
        </div>

        </div>
      </div>

    );
};

  
export default Home;
