import "./App.css";

import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing/landingPage";
import Countries from "./components/country/countries";
import Activity from "./components/activity/activity";

function App() {
  return (
    <div className="App">
      <h1>Henry Countries</h1>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/activity" element={<Activity />} />
      </Routes>
    </div>
  );
}

export default App;
