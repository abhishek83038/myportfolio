import React, { useState } from "react";
import "./Header.css";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="headerWrapper">
      <div className="container">
        <div className="headernavbar">
          <div>
            <h2 className="logo">Portfolio..</h2>
          </div>
          <div className="d-md-none d-block" onClick={()=>setOpen(!open)}>
           {open?<RxCross2 color="#fff" size={25}/>: <MdMenu color="#fff" size={25} />}
          </div>
          <div className="menus d-md-flex d-none">
            <p>Home</p>
            <p>Service</p>
            <p>Resume</p>
            <p>Project</p>
            <p>Contact</p>
          </div>
          {open && (
            <div className="menusmobile">
              <p>Home</p>
              <p>Service</p>
              <p>Resume</p>
              <p>Project</p>
              <p>Contact</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
