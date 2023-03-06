import React from "react";
import { useState } from "react";
import s from "./NavBarDesktop.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import { MdMonitor } from "react-icons/md";
import { BsSearch, BsMoonStars } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../../assets/logo.png";

const NavBarDesktop = () => {
  const [inputSearch, setInputSearch] = useState(false);
  const [input, setInput] = useState("");
  const [divLanguage, setDivLanguage] = useState(false);

  const handleClickSearch = () => {
    setInputSearch(!inputSearch);
  };

  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };

  const handleDeleteInput = () => {
    setInput("");
  };

  const handleClickDivLanguage = () => {
    setDivLanguage(!divLanguage);
  };
  return (
    <div>
      <nav className={s.containerNavBar}>
        <div className={s.menuNavBar}>
          <span className={s.spanMenu}>
            <AiOutlineHome className={s.icon} /> Home
          </span>
          <span className={s.spanMenu}>
            <BiCameraMovie className={s.icon} /> Movies
          </span>
          <span className={s.spanMenu}>
            <MdMonitor className={s.icon} /> Series
          </span>
        </div>
        <div className={s.containerLogo}>
          <img className={s.logo} src={logo} alt="logo" />
        </div>
        <div className={s.containerSearchLanguage}>
          <button className={s.buttonsSearchLanguage}>
            <BsSearch className={s.icon} onClick={handleClickSearch} />
          </button>
          <button className={s.buttonsSearchLanguage}>
            <BsMoonStars className={s.icon} />
          </button>
          <button
            className={s.buttonsSearchLanguage}
            onClick={handleClickDivLanguage}
          >
            <span className={s.spanLanguage}>Es</span>
          </button>
        </div>
      </nav>
      {divLanguage ? (
        <div className={s.containerSelectLanguage}>
          <select className={s.selectLanguage}>
            <option>Español-Spanish</option>
            <option>Inglés-English</option>
          </select>
        </div>
      ) : (
        ""
      )}
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
