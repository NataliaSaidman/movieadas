import s from "./App.module.css";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { menuContext } from "./context/menuContext";
import { SeriesAndMovies } from "./components/SeriesAndMovies/SeriesAndMovies";
import { Home } from "./components/Home/Home";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllMoviesSeries } from "./components/AllMoviesSeries/AllMoviesSeries";
import { Search } from "./components/Search/Search";

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
          <NavBar />
          <div className={menuOpen.menu ? s.blur : ""}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/:type" element={<SeriesAndMovies />}></Route>
              <Route
                path="/:type/:category"
                element={<AllMoviesSeries />}
              ></Route>
              <Route path="search/:wordSearch" element={<Search />}></Route>
            </Routes>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </menuContext.Provider>
  );
}

export default App;
