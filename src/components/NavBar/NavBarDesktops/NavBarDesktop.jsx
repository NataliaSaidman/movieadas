import style from "./NavBarDesktop.module.css";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";

import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { BsSearch, BsMoonStars, BsSun } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";

const NavBarDesktop = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState(false);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("es");
  const [dark, setDark] = useState(true);
  const [transparency, setTransparency] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
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

  const handleClickChangeLanguage = () => {
    if (language === "es") {
      return setLanguage("en");
    } else return setLanguage("es");
  };

  const handleClickChangeColor = () => {
    setDark(!dark);
  };

  const changeTransparencyBackground = () => {
    window.scrollY >= 150 ? setTransparency(true) : setTransparency(false);
  };

  window.addEventListener("scroll", changeTransparencyBackground);

  return (
    <div>
      <div className={style.navBarDesktop}>
        <nav 
          className={
            transparency
            ? `${style.containerNavBar} ${style.active}`
            : style.containerNavBar
          }
        >
          <div className={style.menuNavBar}>
            <Link to="/" className={style.linkRoute}>
              <span className={style.spanMenu}>
                <AiOutlineHome className={style.icon} /> Home
              </span>
            </Link>
            <Link to="/movie" className={style.linkRoute}>
              <span className={style.spanMenu}>
                <BiCameraMovie className={style.icon} /> Movies
              </span>
            </Link>
            <Link to="/tv" className={style.linkRoute}>
              <span className={style.spanMenu}>
                <MdMonitor className={style.icon} /> Series
              </span>
            </Link>
          </div>
          <div className={style.containerLogo}>
            <Link to={"/"}>
              <img className={style.logo} src={logo} alt="logo" />
            </Link>
          </div>
          <div className={style.containerSearchLanguage}>
            <button
              className={style.rightSideButtons}
              onClick={handleClickSearch}
            >
              <BsSearch className={style.icon} />
            </button>
            <button
              className={style.rightSideButtons}
              onClick={handleClickChangeColor}
            >
              {dark ? (
                <BsMoonStars className={style.icon} />
              ) : (
                <BsSun className={style.icon} />
              )}
            </button>
            <button
              className={style.rightSideButtons}
              onClick={handleClickChangeLanguage}
            >
              <span className={style.spanLanguage}>
                {language === "es" ? "Es" : "En"}
              </span>
            </button>
          </div>
        </nav>
        {inputSearch ? (
          <div className={style.containerInput}>
            {input === "" ? (
              <BsSearch className={style.iconSearch} />
            ) : (
              <button onClick={handleDeleteInput}>
                <FiArrowLeft className={style.iconSearch} />
              </button>
            )}
            <form className={style.formInputSearch} onSubmit={handleSubmit}>
              <input
                className={style.inputSearch}
                onChange={handleChangeInput}
                type="text"
                placeholder="¿What are you looking for?"
                value={input}
              />
            </form>
            {input !== "" && (
              <button
                className={style.iconClose}
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
    </div>
  );
};

export { NavBarDesktop };
