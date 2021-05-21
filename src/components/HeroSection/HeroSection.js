import React from "react";
import "../../App.css";
import { Button } from "../Button/Button";
import "./HeroSection.css";
import PDF from "./Ashif_Fahim_Resume.pdf";

const HeroSection = ({ reference, click }) => {
  const onResumeClick = () => {
    window.open(PDF, "_blank");
  };

  return (
    <div className="hero-container" ref={reference}>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Ashif Fahim</h1>
      <p>A guy that likes to break things then fix them</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={click}
        >
          See Projects
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={onResumeClick}
        >
          Know More <i className="fa fa-download" />
        </Button>
      </div>
    </div>
  );
};

export default React.forwardRef(HeroSection);
