import s from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";

import { menuContext } from "./context/menuContext";
import { useState } from "react";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [menu, setMenu] = useState(false);

  const menuOpen = {
    menu,
    setMenu,
  };
  return (
    <menuContext.Provider value={menuOpen}>
      <div className={s.app}>
        <NavBar />
        <div className={menuOpen.menu ? s.blur : ""}></div>
        <Footer />
      </div>
    </menuContext.Provider>
  );
}

export default App;
