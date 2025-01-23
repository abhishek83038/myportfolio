"use client";
import React, { useState } from "react";
import "./resume.css";
import Experience from "../ResumeDetals/MyExperiece/Experience";
import Education from "../ResumeDetals/MyEducation/Education";
import Skills from "../ResumeDetals/MySkills/Skills";

const Resume = () => {
  const [active, setActive] = useState("Experience");
  return (
      <div className="resumeWrap" id="resume">
        <div className="container">
        <h1 className="text-center text-white">
          My <span style={{ color: "var(--main-color)" }}>Resume</span>
        </h1>
          <div className="row py-4">
            <div className="col-md-3 ">
              <div className="resume_navs_wrap">
                <h2>Why Hire Me ?</h2>
                <p>
                  I am a React developer with 2 years of experience in the
                  field. My expertise lies in creating responsive user
                  interfaces and front-facing components using React/React.js. I
                  am passionate about delivering efficient and engaging web
                  applications.
                </p>
                <div className="overflowscroll">
                  <div className="resum_btn_wrap">
                    <button
                      className={`${active == "Experience" && "active"}`}
                      onClick={() => setActive("Experience")}
                    >
                      Experience
                    </button>
                    <button
                      className={`${active == "Education" && "active"}`}
                      onClick={() => setActive("Education")}
                    >
                      Education
                    </button>
                    <button
                      className={`${active == "Skills" && "active"}`}
                      onClick={() => setActive("Skills")}
                    >
                      Skills
                    </button>
                    <button
                      className={`${active == "About" && "active"}`}
                      onClick={() => setActive("About")}
                    >
                      About me
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9 ps-md-5">
              <div className="resume_list_wrap">
                {active == "Experience" && <Experience />}
                {active == "Education" && <Education />}
                {active == "Skills" && <Skills />}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Resume;
