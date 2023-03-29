import style from "./NavBarMobile.module.css";

import { useState, useContext } from "react";

import { menuContext } from "../../../context/menuContext";

import { Link, useNavigate, useLocation } from "react-router-dom";

import logo from "../../../assets/logo.png";

import { BsSearch, BsMoonStars, BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import { tabs } from "../tabs";

const NavBarMobile = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const [dark, setDark] = useState(true);
  const [transparency, setTransparency] = useState(false);
  const location = useLocation();
  const [tabSelected, setTabSelected] = useState(location.pathname);

  const context = useContext(menuContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`);
  };

  const handleClickMenu = () => {
    context.setMenu(!context.menu);
    context.setInputSearch(false);
  };

  const handleClickSearch = () => {
    context.setInputSearch(!context.inputSearch);
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
    <div className={style.navBarMobile}>
      <nav
        className={`${style.containerNav} ${
          context.menu ? style.containerNavOpacity : ""
        } ${transparency ? style.active : ""}`}
      >
        <div className={style.containerHamburguerNav}>
          <button onClick={handleClickMenu}>
            <GiHamburgerMenu />
          </button>
        </div>
        <div className={style.containerLogo}>
          <Link to={"/"}>
            <img className={style.logo} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={style.containerSearch}>
          <button onClick={handleClickSearch}>
            <BsSearch />
          </button>
        </div>
      </nav>
      {context.inputSearch ? (
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
      <div
        className={
          context.menu ? style.menuContainerShow : style.menuContainerHide
        }
        onClick={context.menu ? handleClickMenu : undefined}
      >
        <div
          className={`${style.menuMobile} ${
            context.menu ? style.menuMobileOpen : ""
          }`}
        >
          <button onClick={handleClickMenu}>
            <RxCross1 />
          </button>
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

          {dark ? (
            <span
              className={style.rightSideButtons}
              onClick={handleClickChangeColor}
            >
              <BsMoonStars /> Dark{" "}
            </span>
          ) : (
            <span
              className={style.rightSideButtons}
              onClick={handleClickChangeColor}
            >
              <BsSun /> Clear{" "}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export { NavBarMobile };
