import React from "react";
// import { useRef } from "react";
import { NavBarMobile } from "./NavBarMobile/NavBarMobile";
import { NavBarDesktop } from "./NavBarDesktops/NavBarDesktop";
import s from "./NavBar.module.css";

const NavBar = () => {
  // const windowSize = useRef([window.innerWidth, window.innerHeight]);

  return (
    <>
      <div className={s.NavBarMobile}>
        <NavBarMobile />
      </div>
      <div className={s.NavBarDesktop}>
        <NavBarDesktop />
      </div>
    </>
  );
};

export { NavBar };
