import React from "react";
import {db} from '../config.js';
import { doc, setDoc } from "firebase/firestore";   
import { useState } from 'react';



const addSomething = async (organization, food, servings, location, date, time) => {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "listings", organization), {
    organization: organization,
    food: {food, servings},
    location: location,
    date: date,
    time: time
  });
}



const Addlisting = () => {
  const [organization, setOrganization] = useState('');
  const [food, setFood] = useState('');
  const [servings, setServings] = useState(0);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleChangeOrg = event => {
    setOrganization(event.target.value);
  }

  const handleChangeFood = event => {
    setFood(event.target.value);
  }

  const handleChangeServings = event => {
    setServings(event.target.value);
  }

  const handleChangeLocation = event => {
    setLocation(event.target.value);
  }

  const handleChangeDate = event => {
    setDate(event.target.value);
  }

  const handleChangeTime = event => {
    setTime(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addSomething(organization, food, servings, location, date, time);

  };

  return (
    <div>
      <form class="formbox">
        <label class="form-entry">
          <h2 class = "form-text">
            Organization Name:  
          </h2>
          <input type="text" name="name" onChange={handleChangeOrg}/>
        </label>

        <label class="form-entry">
          <h2 class="form-text">
            Food Provided:  
          </h2>
          <input type="text" name="name" onChange={handleChangeFood}/>
        </label>
      </form>

      <form class="formbox">
        <label class="form-entry">
          <h2 class = "form-text">
            Servings count:
          </h2>
          <input type="number" name="name" onChange={handleChangeServings}/>
        </label>

        <label class="form-entry">
          <h2 class="form-text">
            Location:  
          </h2>
          <input type="text" name="name" onChange={handleChangeLocation}/>
        </label>
      </form>

      <form class="formbox">
        <label class="form-entry">
          <h2 class = "form-text">
            Date:
          </h2>
          <input type="text" name="name" onChange={handleChangeDate}/>
        </label>

        <label class="form-entry">
          <h2 class="form-text">
            Time:  
          </h2>
          <input type="text" name="name" onChange={handleChangeTime}/>
        </label>
      </form>

      <form class="formbox" onSubmit={handleSubmit}>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
  
export default Addlisting;
