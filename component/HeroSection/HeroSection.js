import React from "react";
import "./Herosection.css";
import myself from "../../public/myself2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="Herosectionwrap allpagewrapper">
      <div className="container">
        <div className="row herosectionrow">
          <div className="col-md-7 heroTextcol">
            <h1>Abhishek Kumar Mourya</h1>
            <h4 className="typewriter">
              I'm a
              <span style={{ color: "var(--main-color)" }}>
              </span>
            </h4>
            <p className="my-3">
              i am a react developr with more than 2 years of experience . and i
              also a react native developer to make a paerfect apps. i am a
              react developr with more than 2 years of experience . and i also a
              react native developer to make a paerfect apps
            </p>
            <div className="socialIconsWrap">
              <button>Download CV</button>
              <div className="d-flex gap-3">
                <FaGithub className="hero_icons" />
                <FaLinkedinIn className="hero_icons" />
                <FaYoutube className="hero_icons" />
              </div>
            </div>
          </div>
          <div className="col-md-5 heropiccol">
            <div className="myselfborder">
              <img src={myself.src} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
