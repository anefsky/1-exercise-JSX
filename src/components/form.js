import React from "react";

export function Form() {
  return <form>

    <label htmlFor="search-item">Search:</label>
    <input 
      id="search-item"
      type="text" 
    />
    <button className="submit-btn">Submit</button>
  </form>;
}
