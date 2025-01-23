import React from "react";
import "./Herosection.css";
import myself from "../../public/myself2.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const HeroSection = () => {
  return (
    <div className="Herosectionwrap allpagewrapper">
      <div className="container">
        <div className="row herosectionrow">
          <div className="col-md-7 heroTextcol">
            <h1>Abhishek Kumar Mourya</h1>
            <h4 className="typewriter">
              I'm a<span style={{ color: "var(--main-color)" }}></span>
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
                <a href="https://github.com/abhishek83038" target="_blank">
                  <FaGithub className="hero_icons" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-kumar-mourya-a5b97b228/"
                  target="_blank"
                >
                  <FaLinkedinIn className="hero_icons" />
                </a>
                <a href="https://www.facebook.com/abhishek.mourya.125" target="_blank">
                <FaFacebook className="hero_icons" />
                </a>
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
