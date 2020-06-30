import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "af1bb2ea";
  const APP_KEY = "35d9ba4f9d829c6e667107b220c80c39";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
