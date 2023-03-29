import React from "react";
import s from "./ErrorApi.module.css";
import img from "../../../assets/error.png";
import { Link } from "react-router-dom";

const ErrorApi = () => {
  return (
    <div className={s.container__error}>
      <h1 className={s.title__error}>Error inesperado</h1>
      <p className={s.text__error}>
        Ocurrió un error y su solicitud no pudo ser completada. Intentelo de
        nuevo
      </p>
      <div className={s.container__img}>
        <img className={s.img__explotion} src={img} alt="volcan" />
        <Link to="/">
          <button className={s.button__home}>Pagina principal</button>
        </Link>
      </div>
    </div>
  );
};

export { ErrorApi };
