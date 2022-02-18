import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing/landingPage";
import Countries from "./components/country/countries";
import CountryDetails from "./components/country/countryDetails";
import Activity from "./components/activity/activity";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/country/:id" element={<CountryDetails />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </div>
  );
}

export default App;
