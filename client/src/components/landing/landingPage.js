import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      landing page component
      <Link to="/countries">Get started</Link>
    </div>
  );
};

export default LandingPage;
