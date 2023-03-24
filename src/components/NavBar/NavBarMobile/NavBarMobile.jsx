import style from "./NavBarMobile.module.css";

import { useState, useContext } from "react";

import { menuContext } from "../../../context/menuContext";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../../assets/logo.png";

import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { MdMonitor, MdLanguage } from "react-icons/md";
import { BsSearch, BsMoonStars, BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";

const NavBarMobile = () => {
  const navigate = useNavigate();

  const [inputSearch, setInputSearch] = useState(false);
  const [input, setInput] = useState("");

  const [language, setLanguage] = useState("es");
  const [dark, setDark] = useState(true);

  const context = useContext(menuContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const handleClickMenu = () => {
    context.setMenu(!context.menu);
    setInputSearch(false);
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

  return (
    <div className={style.navBarMobile}>
      <nav
        className={`${style.containerNav} ${
          context.menu ? style.containerNavOpacity : ""
        }`}
      >
        <div className={style.containerHamburguerNav}>
          <button onClick={handleClickMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={style.containerLogo}>
          <img className={style.logo} src={logo} alt="logo" />
        </div>
        <div className={style.containerSearch}>
          <button onClick={handleClickSearch}>
            <BsSearch />
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
              onClick={() => {
                handleClickSearch();
                handleDeleteInput();
              }}
            >
              <RxCross1 className={style.iconClose} />
            </button>
          )}
        </div>
      ) : (
        ""
      )}
      <div className={context.menu ? style.menuContainerShow : style.menuContainerHide}>
        <div
          className={`${style.menuMobile} ${context.menu ? style.menuMobileOpen : ""}`}
        >
          <button onClick={handleClickMenu}>
            <RxCross1 />
          </button>
          <Link to="/" className={style.linkRoute} onClick={handleClickMenu}>
            <span>
              <AiOutlineHome /> Home
            </span>
          </Link>
          <Link to="/movie" className={style.linkRoute} onClick={handleClickMenu}>
            <span>
              <BiCameraMovie /> Movies
            </span>
          </Link>
          <Link to="/tv" className={style.linkRoute} onClick={handleClickMenu}>
            <span>
              <MdMonitor /> Series
            </span>
          </Link>
          <span className={style.spanMenu} onClick={handleClickChangeLanguage}>
            <MdLanguage /> {language === "es" ? "Spanish" : "English"}
          </span>
          {dark ? (
            <span className={style.spanMenu} onClick={handleClickChangeColor}>
              <BsMoonStars /> Dark{" "}
            </span>
          ) : (
            <span className={style.spanMenu} onClick={handleClickChangeColor}>
              <BsSun /> Clear{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export { NavBarMobile };
