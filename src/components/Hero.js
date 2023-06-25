import React from "react";
import img from "../img/ultramarine-memories.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="img-container"><img className="img" src={img} alt="Person floating underwater" /></div>
    </div>
  );
};

export default Hero;
