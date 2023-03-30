import React from "react";

import s from "./ErrorApi.module.css";

import img from "../../../assets/error.png";

import { Link } from "react-router-dom";

import { useContext } from "react"

import { menuContext } from "../../../context/menuContext"

const ErrorApi = () => {

  const context = useContext(menuContext)

  const handleSearchBar = () => {
    context.setInputSearch(false)
  }

  return (
    <div className={s.container__error}>
      <h1 className={s.title__error}>Unexpected error</h1>
      <p className={s.text__error}>
        An unexpected error occurred. Please try again.
      </p>
      <div className={s.container__img}>
        <img className={s.img__explotion} src={img} alt="volcan" />
        <Link to="/">
          <button className={s.button__home} onClick={handleSearchBar}>Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export { ErrorApi };
