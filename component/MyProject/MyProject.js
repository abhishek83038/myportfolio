import React from "react";
import "./myproject.css";
import superc1 from "../../public/superc1.png";
import Farmers from "../../public/Farmer.png";

const projects=[
{id:1,title:"The SuperC",description:" Online practice platform designed for student of classes 3 to 7",image:superc1.src,liveurl:"https://www.thesuperc.com/"},
{id:2,title:"Farmers Market",description:"Ecommerce website for farmers ",image:Farmers.src,liveurl:"https://fmwebsite-446307.el.r.appspot.com/"},
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
            <div className="col-md-4 mt-4" key={val.id}>
              <div className="projCard">
                <img src={val.image} width="100%" />
                <div className="projCardHover">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-2">{val.title}</h6>
                    <div className="d-flex gap-2">
                      <a href="https://www.thesuperc.com/"  target="_blank">
                      <button className="viewbtn ">View More</button>
                      </a>
                      <a href={val.liveurl} target="_blank">
                      <button className="livebtn">Live Demo</button>
                      </a>
                    </div>
                  </div>
                  <p>{val.description}</p>
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
