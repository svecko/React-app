import React from "react";
import "../../css/Gallery.css";

const Imgcard = ({ slika }) => {
  return (
    <div className="imgCard">
      <img src={slika.lokacijaSlike} alt="slika" height="200" />
    </div>
  );
};

export default Imgcard;
