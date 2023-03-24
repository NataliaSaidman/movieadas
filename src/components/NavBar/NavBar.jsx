import style from "./NavBar.module.css";

import { NavBarMobile } from "./NavBarMobile/NavBarMobile";
import { NavBarDesktop } from "./NavBarDesktops/NavBarDesktop";

const NavBar = () => {
  return (
    <>
      <div className={style.NavBarMobile}>
        <NavBarMobile />
      </div>
      <div className={style.NavBarDesktop}>
        <NavBarDesktop />
      </div>
    </>
  );
};

export { NavBar };
