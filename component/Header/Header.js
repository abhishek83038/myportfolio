import React, { useState } from "react";
import "./Header.css";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import mySelf from "../../public/myself2.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="headerWrapper">
      <div className="container">
        <div className="headernavbar">
          <div className="d-flex align-items-center gap-4">
            {/* <img src={mySelf.src} width="50px" height="50px" style={{borderRadius:"50%",border:"2px solid #fff"}}/> */}
            <h2 className="logo">My Portfolio..</h2>
          </div>
          <div className="d-md-none d-block" onClick={() => setOpen(!open)}>
            <div
              className={`hamburger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
          <div className="menus d-md-flex d-none">
            <p><a href="/#">Home</a></p>
            <p><a href="#service">Service</a></p>
            <p><a href="#resume">Resume</a></p>
            <p><a href="#MyProject">Project</a></p>
            <p>Contact</p>
          </div>
          {/* {open && ( */}
          <div className="overlap" style={{ width: open ? "100%" : "0px" }}>
            <div
              className="menusmobile"
              style={{ width: open ? "60%" : "0px" }}
            >
              <p style={{ opacity: open ? "1" : "0" }}>Home</p>
              <p style={{ opacity: open ? "1" : "0" }}>Service</p>
              <p style={{ opacity: open ? "1" : "0" }}>Resume</p>
              <p style={{ opacity: open ? "1" : "0" }}>Project</p>
              <p style={{ opacity: open ? "1" : "0" }}>Contact</p>
            </div>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
