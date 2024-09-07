import { useState } from "react";
import "../styles/navbar.css";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="nav">
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="navInside">
          <div className="navDiv">Where in the world?</div>
          <button
            className="navBtn"
            onClick={() => {
              console.log("Button Clicked");
              toggleDarkMode(!darkMode);
              console.log("is Dark Mode: ", darkMode);
            }}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>
    </div>
  );
};
