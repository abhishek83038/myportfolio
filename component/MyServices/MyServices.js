import React from "react";
import "./MyServices.css";
import { FaCode } from "react-icons/fa6";
import { LuBrush } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineColorLens } from "react-icons/md";


const list = [
  {
    id: 1,
    title: "Web Development",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <FaCode className="goiconcode" color="#fff" />
  },
  {
    id: 2,
    title: "Ui/Ux Design",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <LuBrush className="goiconcode" color="#fff" />
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <MdOutlineColorLens className="goiconcode" color="#fff" />
  },
  {
    id: 1,
    title: "Web Development",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <FaCode className="goiconcode" color="#fff" />
  },
  {
    id: 2,
    title: "Ui/Ux Design",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <LuBrush className="goiconcode" color="#fff" />
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <MdOutlineColorLens className="goiconcode" color="#fff" />
  },
  {
    id: 1,
    title: "Web Development",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <FaCode className="goiconcode" color="#fff" />
  },
  {
    id: 2,
    title: "Ui/Ux Design",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <LuBrush className="goiconcode" color="#fff" />
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "i am a react developr with more than 2 years of experience . and i also a react native developer to make a paerfect apps. i am a react developr with more than 2 years of experience .",
      icon: <MdOutlineColorLens className="goiconcode" color="#fff" />
  },
];

const MyServices = () => {
  return (
    <div className="MyServicesWrap">
      <h1>
        My <span style={{ color: "var(--main-color)" }}>Services</span>
        {/* <div className="boxshadowmiddle"></div> */}
      </h1>
      <div className="container">
        <div className="row mt-5">
          {list.map((val,i) => (
            <div className="col-md-3 col-6 p-md-3 p-2" key={i}>
              <div className="servicesCard">
                <div className="d-flex justify-content-between align-items-center">
                  {val.icon}
                  <FaArrowRight className="goicon"  />
                </div>
                <h4>{val.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyServices;
