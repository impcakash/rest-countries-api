import "../styles/countryData.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CountryData = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [countryData, setCountryData] = useState([]);

  // https://json-server-nmpi.onrender.com/countryData/
  // http://localhost:3005/countryData
  useEffect(() => {
    fetch("https://json-server-nmpi.onrender.com/countryData")
      .then((d) => d.json())
      .then((data) => {
        // console.log("Datas: ", data);
        setCountryData(data);
      });
  }, []);

  // const FilterCountry = (e) => {
  //   console.log("option clicked: ", e);
  //   let data_xyz = countryData.filter((abc) => abc.region === e);
  //   // console.log("Filter Data: ", data_xyz);
  //   setCountryData(data_xyz);
  // };

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="nav">
        <div className={darkMode ? "dark-mode" : "light-mode"}>
          <div className="navInside">
            <div className="navDiv">Where in the world?</div>
            <div
              className="navBtn"
              onClick={() => {
                console.log("Button Clicked");
                toggleDarkMode(!darkMode);
                console.log("is Dark Mode: ", darkMode);
              }}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </div>
          </div>
        </div>
      </div>
      <div className="bodyTop">
        <div className="bodyInput">
          <input type="text" placeholder="Search for a country..." />
        </div>
        <div className="bodySelect">
          <select
            name="Filter by Region"
            id=""
            onChange={(e) => {
              console.log("Selected: ", e.target.value);
              // FilterCountry(e.target.value);
            }}
          >
            <option value="">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="bodyDown">
        {countryData.map((d) => (
          <div className="bodyData" key={d.name}>
            <div
              onClick={() => {
                console.log("Clicked: ", d.name, d.id);
              }}
            >
              <Link to={`/countryData/${d.id}`}>
                <div>
                  <img src={d.flag} alt="" />
                </div>
                <div className="bodyDataDetails">
                  <h2>{d.name}</h2>
                  <div>
                    <b>Population:</b> {d.population}
                  </div>
                  <div>
                    <b>Region:</b> {d.region}
                  </div>
                  <div>
                    <b>Capital:</b> {d.capital}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
