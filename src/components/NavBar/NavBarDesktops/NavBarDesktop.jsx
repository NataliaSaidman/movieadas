import style from "./NavBarDesktop.module.css";

import { useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../../../assets/logo.png";

import { BsSearch, BsMoonStars, BsSun } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { tabs } from "../tabs";

const NavBarDesktop = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState(false);
  const [input, setInput] = useState("");
  const [dark, setDark] = useState(true);
  const [transparency, setTransparency] = useState(false);
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState(location.pathname);

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

  const handleClickChangeColor = () => {
    setDark(!dark);
  };

  const changeTransparencyBackground = () => {
    window.scrollY >= 100 ? setTransparency(true) : setTransparency(false);
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
            {tabs.map(({ name, path, Icon }, i) => (
              <Link
                to={path}
                onClick={() => setTabSelected(path)}
                key={`${name}-${i}`}
                className={style.linkRoute}
              >
                <span
                  className={
                    tabSelected === path
                      ? `${style.spanMenu} ${style.activeTab}`
                      : `${style.spanMenu}`
                  }
                >
                  <Icon className={style.icon} /> {name}
                </span>
              </Link>
            ))}
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
