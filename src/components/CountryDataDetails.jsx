import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/countryDataDetails.css";

export const CountryDataDetails = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const { id } = useParams();

  const [country, setCountry] = useState([]);

  // https://json-server-nmpi.onrender.com/countryData
  // http://localhost:3005/countryData/${id}

  useEffect(() => {
    fetch(`https://json-server-nmpi.onrender.com/countryData/${id}`)
      .then((d) => d.json())
      .then((data) => {
        console.log("Datas: ", data);
        setCountry(data);
      });
  }, [id]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <div className="nav">
        <div>
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
      <div className="bodybtn">
        <button>
          <Link to={"/"}>Back</Link>
        </button>
      </div>
      <div className="bodyMain">
        <div className="bodyFlag">
          <img className="flagDetail" src={country.flag} alt="" />
        </div>
        <div className="bodyDetails">
          <div className="bodyDetailsData">
            <h1>{country.name}</h1>
            <div className="bodyDetailsDataEntry">
              <div>
                <b>Native Name: </b>
                {country.nativeName}
              </div>
              <div>
                <b>Top Level Domain: </b>
                {country.topLevelDomain}
              </div>
              <div>
                <b>Population: </b>
                {country.population}
              </div>
              <div>
                <b>Currencies: </b>
                {/* {country.currencies.map((curr) => curr.code)} */}
              </div>
              <div>
                <b>Region: </b>
                {country.region}
              </div>
              <div>
                <b>Languages: </b>
                {/* {country.languages.map((lang) => lang.name + ", ")} */}
              </div>
              <div>
                <b>Sub Region: </b>
                {country.subregion}
              </div>
              <div></div>
              <div>
                <b>Capital: </b>
                {country.capital}
              </div>
            </div>
            <div></div>
          </div>
          <div className="bodyBorder">
            <b>Border Countries: </b>
            {/*  */}
          </div>
        </div>
      </div>
    </div>
  );
};
