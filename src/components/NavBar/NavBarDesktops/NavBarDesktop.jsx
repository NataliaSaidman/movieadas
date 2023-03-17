import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./NavBarDesktop.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { BsSearch, BsMoonStars, BsSun } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../../assets/logo.png";

const NavBarDesktop = () => {
  const [inputSearch, setInputSearch] = useState(false);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("es");
  const [dark, setDark] = useState(true);

  const handleClickSearch = () => {
    setInputSearch(!inputSearch);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteInput = () => {
    setInput("");
  };

  const handleClickChangeLanguage = () => {
    if (language === "es") {
      return setLanguage("en");
    } else return setLanguage("es");
  };

  const handleClickChangeColor = () => {
    setDark(!dark);
  };
  return (
    <div>
      <nav className={s.containerNavBar}>
        <div className={s.menuNavBar}>
          <span className={s.spanMenu}>
            <AiOutlineHome className={s.icon} /> Home
          </span>
          <Link to="/movies" className={s.linkRoute}>
            <span className={s.spanMenu}>
              <BiCameraMovie className={s.icon} /> Movies
            </span>
          </Link>
          <Link to="/series" className={s.linkRoute}>
            <span className={s.spanMenu}>
              <MdMonitor className={s.icon} /> Series
            </span>
          </Link>
        </div>
        <div className={s.containerLogo}>
          <img className={s.logo} src={logo} alt="logo" />
        </div>
        <div className={s.containerSearchLanguage}>
          <button
            className={s.buttonsSearchLanguage}
            onClick={handleClickSearch}
          >
            <BsSearch className={s.icon} />
          </button>
          <button
            className={s.buttonsSearchLanguage}
            onClick={handleClickChangeColor}
          >
            {dark ? (
              <BsMoonStars className={s.icon} />
            ) : (
              <BsSun className={s.icon} />
            )}
          </button>
          <button
            className={s.buttonsSearchLanguage}
            onClick={handleClickChangeLanguage}
          >
            <span className={s.spanLanguage}>
              {language === "es" ? "Es" : "En"}
            </span>
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
              className={s.iconClose}
              onClick={() => {
                handleClickSearch();
                handleDeleteInput();
              }}
            >
              <RxCross1 />
            </button>
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { NavBarDesktop };
