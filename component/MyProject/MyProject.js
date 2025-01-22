import React from "react";
import "./myproject.css";
import superc from "../../public/superc.jpg";

const projects=[
1,2,3,4,5
]

const MyProject = () => {
  return (
    <div id="MyProject" className="myprojextWrapper">
      <div className="container">
        <h1>
          My <span style={{ color: "var(--main-color)" }}>Projects</span>
        </h1>
        <div className="row">
          {projects.map((val) => (
            <div className="col-md-4 mt-4">
              <div className="projCard">
                <img src={superc.src} width="100%" />
                <div className="projCardHover">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-2">The superC</h6>
                    <div className="d-flex gap-2">
                      <button className="viewbtn">View More</button>
                      <button className="livebtn">Live Demo</button>
                    </div>
                  </div>
                  <p>Education learning platform</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProject;
