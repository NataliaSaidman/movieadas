import s from "./NavBar.module.css";

import { NavBarMobile } from "./NavBarMobile/NavBarMobile";
import { NavBarDesktop } from "./NavBarDesktops/NavBarDesktop";

const NavBar = () => {
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
