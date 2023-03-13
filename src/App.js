import s from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { menuContext } from "./context/menuContext";
import { SeriesAndMovies } from "./components/SeriesAndMovies/SeriesAndMovies";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);

  const menuOpen = {
    menu,
    setMenu,
  };
  return (
    <menuContext.Provider value={menuOpen}>
      <BrowserRouter>
        <div className={s.app}>
          <div className={menuOpen.menu ? s.blur : ""}>
            <NavBar />
            <Routes>
              <Route
                path="/series"
                element={<SeriesAndMovies movieOrTv={"tv"} />}
              ></Route>
              <Route
                path="/movies"
                element={<SeriesAndMovies movieOrTv={"movie"} />}
              ></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </menuContext.Provider>
  );
}

export default App;
