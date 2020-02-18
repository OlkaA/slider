import React from "react";
import "./slideTwo.scss";
import PinkQuotes from "../../assets/pink-quotes.svg";
import Cake from "../../assets/cake.svg";

const SlideOne = () => {
  return (
    <div className="slide slide-two">
      <div className="quotes">
        <img src={PinkQuotes} alt="quotes" />
        <p className="main-text">
          An experience that makes us feel like we’re covered in maple syrup –{" "}
          <span className="colored">It’s a good thing</span>
        </p>
      </div>
      <div className="">
        <img src={Cake} alt="cake" />
        <p className="secondary-text">
          The whole team @ <br/> The Pancake Collective™
        </p>
      </div>
    </div>
  );
};

export default SlideOne;
