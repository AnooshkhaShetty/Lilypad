import React from "react";
  
const Addlisting = () => {
  return (
    <div>
      <form class="formbox">
        <label class="form-entry">
          <h2 class = "form-text">
            Organization Name:  
          </h2>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </label>

        <label class="form-entry">
          <h2 class="form-text">
            Food Provided:  
          </h2>
          <input type="text" name="name" />
          <input type="submit" value="Submit" />
        </label>
      </form>
    </div>
  );
};
  
export default Addlisting;
