// Import Firestore database
import {db} from '../config.js';
import { useState } from 'react';
import { getDocs, collection } from 'firebase/firestore';
const getListings = async () => {
  let my_arr = [];
  const querySnapshot = await getDocs(collection(db, "listings"));
  querySnapshot.forEach((element) => {
    var data = element.data();
    my_arr.push(data);
  });
  return my_arr;

}

const Listings = () => {
  const [results , setResults] = useState([]);
  //this makes it not constantly refresh, while actually loading the values when they appear
  (async () => { 
    const resultsTemp = await getListings();
    setResults(resultsTemp);
  })();




// Display the result on the page
  return (
    <div>
      {results.map(seller => {
        return (
          <div key={seller.organization}>
            <h2>Organization: {seller.organization} </h2>
            <p><b>Food: </b>{seller.food.food}</p>
            <p><b>Servings: </b>{seller.food.servings}</p>
            <p><b>Location: </b>{seller.location}</p>
          </div>
        );
      } 

      )}
    </div>
  );
}

export default Listings;
