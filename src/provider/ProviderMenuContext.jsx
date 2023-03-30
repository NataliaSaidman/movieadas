import { menuContext } from "../context/menuContext";
import { useState, useEffect } from "react";
import s from "../App.module.css";

const ProviderMenuContext = ({ children }) => {
  const [menu, setMenu] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const selectedTheme = localStorage.getItem("selectedTheme");

  useEffect(() => {
    if (selectedTheme === "light") {
      setLightMode(true);
    } else {
      setLightMode(false);
    }
  }, [selectedTheme]);

  const menuOpen = {
    menu,
    setMenu,
    setInputSearch,
    inputSearch,
    setLightMode,
    lightMode,
  };
  return (
    <menuContext.Provider value={menuOpen}>
      <div className={`${s.app} ${lightMode && s.active}`}>{children}</div>
    </menuContext.Provider>
  );
};

export { ProviderMenuContext };
