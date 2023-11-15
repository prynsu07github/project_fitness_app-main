// eslint-disable-next-line
import React from "react";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <div className="start-page">
      <div className="buttons">
        <Link to="/sign-in">
          <button>Sign In</button>
        </Link>
        <Link to="/sign-up">
          <button style={{backgroundColor:"white" , color:"#FF2625"}}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default StartPage;
