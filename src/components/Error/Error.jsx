import React from "react";
import s from "./Error.module.css";
import img from "../../assets/error.png";
import { Link } from "react-router-dom";
// import imgOne from "../../assets/error.png";
// import imgTwo from "../../assets/error.jpg";

const Error = () => {
  return (
    <div className={s.bl_page404}>
      <h1 className={s.page404__title}>Error 404. La pagina no existe.</h1>
      <p className={s.page404__text}>
        ¡Lo siento! La página que busca no se encuentra.
      </p>
      <div className={s.bl_page404__wrapper}>
        <img src={img} alt="volcan" />
        <div className={s.bl_page404__el1}></div>
        <div className={s.bl_page404__el2}></div>
        <div className={s.bl_page404__el3}></div>
        <Link to="/">
          <button className={s.bl_page404__link}>go home</button>
        </Link>
      </div>
    </div>
  );
};

export { Error };
