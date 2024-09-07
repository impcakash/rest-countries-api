import "./App.css";
import { CountryData } from "./components/CountryData";
import { CountryDataDetails } from "./components/CountryDataDetails";
import { Routes, Route } from "react-router-dom";

// countryData
// https://json-server-nmpi.onrender.com/countryData/

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CountryData />}></Route>
        <Route path="/countryData/:id" element={<CountryDataDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
