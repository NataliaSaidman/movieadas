import React from "react";
import s from "./NavBarMobile.module.css";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { MdMonitor, MdLanguage } from "react-icons/md";
import { BsSearch, BsMoonStars } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../../assets/logo.png";

const NavBarMobile = () => {
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
  const handleDeleteInput = () => {
    setInput("");
  };

  return (
    <div>
      <div className={s.navBarMobile}>
        <nav className={s.containerNav}>
          <div className={s.containerHamburguerNav}>
            {menu ? (
              <button onClick={handleClickMenu}>
                <RxCross1 />
              </button>
            ) : (
              <button onClick={handleClickMenu}>
                <GiHamburgerMenu />
              </button>
            )}
          </div>

          <div className={s.containerLogo}>
            <img className={s.logo} src={logo} alt="logo" />
          </div>
          <div className={s.containerSearch}>
            <button onClick={handleClickSearch}>
              <BsSearch />
            </button>
          </div>
        </nav>
        {inputSearch ? (
          <div className={s.containerInput}>
            {input === "" ? (
              <BsSearch className={s.iconSearch} />
            ) : (
              <button onClick={handleDeleteInput}>
                <FiArrowLeft className={s.iconSearch} />
              </button>
            )}
            <input
              className={s.inputSearch}
              onChange={handleChangeInput}
              type="text"
              placeholder="¿What are you looking for?"
              value={input}
            />
            {input !== "" && (
              <button
                onClick={() => {
                  handleClickSearch();
                  handleDeleteInput();
                }}
              >
                <RxCross1 className={s.iconClose} />
              </button>
            )}
          </div>
        ) : (
          ""
        )}
        {menu ? (
          <div className={s.menuMobile}>
            <span className={s.spanMenu}>
              <AiOutlineHome /> Home
            </span>
            <span className={s.spanMenu}>
              <BiCameraMovie /> Movies
            </span>
            <span className={s.spanMenu}>
              <MdMonitor /> Series
            </span>
            <span className={s.spanMenu}>
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
    </div>
  );
};

export { NavBarMobile };
