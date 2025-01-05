import React from "react";
import "./experience.css";
import { FaRegCheckCircle, FaCircle } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="">
      <h2>My <span style={{ color: "var(--main-color)" }}>Experience</span></h2>
      <p>
        i am a react developer with more than 2 years of experience i am a react
        developer with more than 2 years of experience i am a react developer
        with more than 2 years of experience i am a react developer with more
        than 2 years of experience
      </p>
      <div className="row resume_Wrapper">
        <div className="col-md-12">
          <div className="experienecard">
            <h6 className="mb-2" style={{ color: "var(--main-color)" }}>
              Aug 2022 - Present
            </h6>
            <h4>Reactjs Developer || React Native Developer</h4>
            <p className="d-flex gap-2 align-items-center">
              <FaCircle color="var(--main-color)" /> Pliancy digital technology
              Pvt Ltd
            </p>

            <div className="d-flex gap-3 ms-3">
              <span className="">
                <FaRegCheckCircle />
              </span>
              <span className="">
                I am a <b className="mx-1 text-light">React developer</b> with{" "}
                <b className="mx-1 text-light">2.5 years</b> of experience in
                the field. My expertise lies in creating responsive user
                interfaces and front-facing components using React/React.js. I
                am passionate about delivering efficient and engaging web
                applications.
              </span>
            </div>
            <div className="d-flex gap-3 ms-3 mt-3">
              <span className="">
                <FaRegCheckCircle />
              </span>
              <span className="">
                I am a <b className="mx-1 text-light">Next js developer</b> also
                with same <b className="mx-1 text-light">2.5 years</b> of
                experience in the field.
              </span>
            </div>
            <div className="d-flex gap-3 ms-3 mt-3">
              <span className="">
                <FaRegCheckCircle />
              </span>
              <span className="">
                I am also work as{" "}
                <b className="mx-1 text-light">React native developer</b> with{" "}
                <b className="mx-1 text-light">2 years</b> of experience in the
                field.
              </span>
            </div>
            <div className="d-flex gap-3 ms-3 mt-3">
              <span className="">
                <FaRegCheckCircle />
              </span>
              <span className="">
                I am also work as{" "}
                <b className="mx-1 text-light">Backend developer</b> with{" "}
                <b className="mx-1 text-light">1 years</b> of experience. I make
                fully <b className="mx-1 text-light">Restfull Api</b> with all
                authontication and authorization and Ensure seamless{" "}
                <b>integration of front-end and back-end systems</b>.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
