import React from "react";
import "./skill.css";
import { FaRegCheckCircle, FaCircle } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { LiaReact } from "react-icons/lia";
import { RiBootstrapFill } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongoose } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { SiGreensock } from "react-icons/si";

const skillList = [
  {
    icon: <FaHtml5 className="skillLogos" />,
    name: "HTML",
  },
  {
    icon: <IoLogoCss3 className="skillLogos" />,
    name: "CSS",
  },
  {
    icon: <FaJsSquare className="skillLogos" />,
    name: "JavaScript",
  },
  {
    icon: <LiaReact className="skillLogos" />,
    name: "React js",
  },
  {
    icon: <RiNextjsLine className="skillLogos" />,
    name: "Next js",
  },
  {
    icon: <RiBootstrapFill className="skillLogos" />,
    name: "Bootstrap",
  },
  {
    icon: <SiMui className="skillLogos" />,
    name: "Material ui",
  },
  {
    icon: <TbBrandRedux className="skillLogos" />,
    name: "Redux",
  },
  {
    icon: <TbBrandReactNative className="skillLogos" />,
    name: "React Native",
  },

  {
    icon: <IoLogoNodejs className="skillLogos" />,
    name: "Node js",
  },
  {
    icon: <SiExpress className="skillLogos" />,
    name: "Express js",
  },
  {
    icon: <SiMongoose className="skillLogos" />,
    name: "Mongoose",
  },
  {
    icon: <GrMysql className="skillLogos" />,
    name: "Mysql",
  },
  {
    icon: <SiMongodb className="skillLogos" />,
    name: "Mongo DB",
  },
  {
    icon: <FaGitAlt className="skillLogos" />,
    name: "Git",
  },
  {
    icon: <SiGreensock className="skillLogos" />,
    name: "GSAP Animation ",
  },
  
];

const Skills = () => {
  return (
    <div className="">
      <h2>
        My <span style={{ color: "var(--main-color)" }}>Skills</span>
      </h2>
      <div className="row resume_Wrapper">
        {skillList?.map((val, i) => (
          <div className="col-md-2 col-4 p-2 p-md-2" key={i}>
            <div className="skillscard">
              {val.icon}
              <p>{val.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
