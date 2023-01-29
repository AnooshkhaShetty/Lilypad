import React from "react";
import {db} from '../config.js';
import { doc, setDoc, getDoc } from "firebase/firestore";   
import { useState } from 'react';



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



const Addlisting = () => {
  const [organization, setOrganization] = useState('');
  const [food, setFood] = useState('');
  const [servings, setServings] = useState(0);
  const [location, setLocation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div>
      <form class="formbox">
        <label class="form-entry">
          <h2 class = "form-text">
            Organization Name:  
          </h2>
          <input type="text" name="name" />
        </label>

        <label class="form-entry">
          <h2 class="form-text">
            Food Provided:  
          </h2>
          <input type="text" name="name" />
        </label>
      </form>

      <form class="formbox">
        <label class="form-entry">
          <h2 class = "form-text">
            Servings count:
          </h2>
          <input type="number" name="name" />
        </label>

        <label class="form-entry">
          <h2 class="form-text">
            Location:  
          </h2>
          <input type="text" name="name" />
        </label>
      </form>
      <form class="formbox" onSubmit={()=> console.log("lawl")}>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};
  
export default Addlisting;
