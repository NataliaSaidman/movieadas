import s from "./Loading.module.css";

import { useContext } from "react";

import { menuContext } from "../../context/menuContext" 

const Loading = () => {
  const theme = useContext(menuContext)

  return <span className={`${s.loader} ${theme.lightMode && s.active}`}></span>;
};

export { Loading };
