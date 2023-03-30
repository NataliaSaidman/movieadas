import React from "react";

import s from "./Error.module.css";

import img from "../../assets/error.png";

import { Link } from "react-router-dom";

import { useContext } from "react"

import { menuContext } from "../../context/menuContext"

const Error = () => {

  const context = useContext(menuContext)

  const handleSearchBar = () => {
    context.setInputSearch(false)
  }

  return (
    <div className={s.bl_page404}>
      <h1 className={s.page404__title}>Error 404. Page not found.</h1>
      <p className={s.page404__text}>
        ¡We're sorry! The page you requested was not found.
      </p>
      <div className={s.bl_page404__wrapper}>
        <img src={img} alt="volcan" />
        <div className={s.bl_page404__el1}></div>
        <div className={s.bl_page404__el2}></div>
        <div className={s.bl_page404__el3}></div>
        <Link to="/">
          <button className={s.bl_page404__link} onClick={handleSearchBar}>Go home</button>
        </Link>
      </div>
    </div>
  );
};

export { Error };
