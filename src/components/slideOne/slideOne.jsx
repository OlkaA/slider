import React from "react";
import "./slideOne.scss";
import BlueQuotes from "../../assets/blue-quotes.svg";
import Smile from "../../assets/smile.svg";

const SlideOne = () => {
  return (
    
    <div className="slide slide-one">
      <div className="quotes">
        <img src={BlueQuotes} alt="quotes" />
        <p className="main-text">
          This piece of software is <span className="colored">the shit</span>,
          I’ve never tried anything like it.
        </p>
      </div>
      <div className="">
        <img src={Smile} alt="smile" />
        <p className="secondary-text">Mr. Face</p>
        <p className="sub-text">Karma Guru @ Face Co™</p>
      </div>
    </div>
  );
};

export default SlideOne;
