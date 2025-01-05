import React from "react";
import "./education.css";
import { FaRegCheckCircle, FaCircle } from "react-icons/fa";

const Education = () => {
  return (
    <div className="">
      <h2>
        My <span style={{ color: "var(--main-color)" }}>Education</span>
      </h2>
      <p>
        i am a react developer with more than 2 years of experience i am a react
        developer with more than 2 years of experience i am a react developer
        with more than 2 years of experience i am a react developer with more
        than 2 years of experience
      </p>
      <div className="row resume_Wrapper">
        <div className="col-md-6">
          <div className="experienecard">
            <h6 className="mb-2" style={{ color: "var(--main-color)" }}>
              July 2018 - July 2022
            </h6>
            <h4>B.Tech  -  <span style={{fontSize:"18px"}}>(computer science)</span></h4>
            <span className="fw-bold text-secondary">with - 8.5 CGPA</span>
            <p className="d-flex gap-2 align-items-center">
              <FaCircle color="var(--main-color)" /> Dr. A.P.J. Abdul Kalam Technical University Lucknow,
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="experienecard">
            <h6 className="mb-2" style={{ color: "var(--main-color)" }}>
              July 2016 - July 2018
            </h6>
            <h4>Intermidiate <span style={{fontSize:"18px"}}>(CBSE Board)</span></h4>
            <span className="fw-bold text-secondary">with - 60 percentage</span>
            <p className="d-flex gap-2 align-items-center">
              <FaCircle color="var(--main-color)" /> Dr. A.P.J. Abdul Kalam Technical University Lucknow,
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="experienecard">
            <h6 className="mb-2" style={{ color: "var(--main-color)" }}>
              July 2016 - July 2018
            </h6>
            <h4>High School <span style={{fontSize:"18px"}}>(ICSE Board)</span></h4>
            <span className="fw-bold text-secondary">with - 70 percentage</span>
            <p className="d-flex gap-2 align-items-center">
              <FaCircle color="var(--main-color)" /> Dr. A.P.J. Abdul Kalam Technical University Lucknow,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
