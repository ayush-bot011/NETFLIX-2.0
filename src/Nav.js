import React, { useEffect, useState } from "react";
import "./Nav.css";
import img1 from "./img/net.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.addEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => {
            history.push("/");
          }}
          className="nav__logo"
          src={img1}
          alt="netflix-transparent.png"
        ></img>
        <img
          onClick={() => {
            history.push("/profile");
          }}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=" "
        ></img>
      </div>
    </div>
  );
}

export default Nav;
