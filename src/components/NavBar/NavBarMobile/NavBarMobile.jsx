import s from "./NavBarMobile.module.css";

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
    <div>
      <div className={s.navBarMobile}>
        <nav
          className={`${s.containerNav} ${
            context.menu ? s.containerNavOpacity : ""
          }`}
        >
          <div className={s.containerHamburguerNav}>
            <button onClick={handleClickMenu}>
              <GiHamburgerMenu />
            </button>
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
            <form className={s.formInputSearch} onSubmit={handleSubmit}>
              <input
                className={s.inputSearch}
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
                <RxCross1 className={s.iconClose} />
              </button>
            )}
          </div>
        ) : (
          ""
        )}

        <div
          className={`${s.menuMobile} ${context.menu ? s.menuMobileOpen : ""}`}
        >
          <button onClick={handleClickMenu}>
            <RxCross1 />
          </button>
          <Link to="/" className={s.linkRoute} onClick={handleClickMenu}>
            <span>
              <AiOutlineHome /> Home
            </span>
          </Link>
          <Link to="/movie" className={s.linkRoute} onClick={handleClickMenu}>
            <span>
              <BiCameraMovie /> Movies
            </span>
          </Link>
          <Link to="/tv" className={s.linkRoute} onClick={handleClickMenu}>
            <span>
              <MdMonitor /> Series
            </span>
          </Link>
          <span className={s.spanMenu} onClick={handleClickChangeLanguage}>
            <MdLanguage /> {language === "es" ? "Spanish" : "English"}
          </span>
          {dark ? (
            <span className={s.spanMenu} onClick={handleClickChangeColor}>
              <BsMoonStars /> Dark{" "}
            </span>
          ) : (
            <span className={s.spanMenu} onClick={handleClickChangeColor}>
              <BsSun /> Clear{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export { NavBarMobile };
