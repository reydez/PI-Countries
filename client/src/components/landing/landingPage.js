import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-conteiner">
      <div className="landing-details">
        <h1>Henry Countries</h1>
        <Link to="/countries">
          <button type="submit">Empezar</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
