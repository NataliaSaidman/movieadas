import React from "react";
import s from "./NavBar.module.css";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie, BiChevronLeft } from "react-icons/bi";
import { MdMonitor, MdLanguage } from "react-icons/md";
import { BsSearch, BsMoonStars } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const [input, setInput] = useState("");

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const handleClickSearch = () => {
    setInputSearch(!inputSearch);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <nav className={s.containerNav}>
        <div className={s.containerHamburguerNav}>
          {menu ? (
            <RxCross1 onClick={handleClickMenu} />
          ) : (
            <GiHamburgerMenu onClick={handleClickMenu} />
          )}
        </div>

        <div className={s.containerLogo}>
          <img className={s.logo} src={logo} alt="logo" />
        </div>
        <div className={s.containerSearch}>
          <BsSearch onClick={handleClickSearch} />
        </div>
      </nav>
      {inputSearch ? (
        <div className={s.containerInput}>
          {input === "" ? (
            <BsSearch className={s.iconSearch} />
          ) : (
            <BiChevronLeft className={s.iconSearch} />
          )}
          <input
            className={s.inputSearch}
            onChange={handleChangeInput}
            type="text"
            placeholder="¿What are you looking for?"
          />
        </div>
      ) : (
        ""
      )}
      {menu ? (
        <div className={s.menuMobile}>
          <span>
            <AiOutlineHome /> Home
          </span>
          <span>
            <BiCameraMovie /> Movies
          </span>
          <span>
            <MdMonitor /> Series
          </span>
          <span>
            <MdLanguage /> Languages
          </span>
          <span>
            <BsMoonStars /> Dark
          </span>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;
