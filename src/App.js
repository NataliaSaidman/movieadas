import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./components/Home/Home";
import { SeriesAndMovies } from "./components/SeriesAndMovies/SeriesAndMovies";
import { AllMoviesSeries } from "./components/AllMoviesSeries/AllMoviesSeries";
import { Details } from "./components/Details/Details";
import { Search } from "./components/Search/Search";
import { Error } from "./components/Error/Error";
import { Footer } from "./components/Footer/Footer";
import { ProviderMenuContext } from "./provider/ProviderMenuContext";

function App() {
  return (
    <ProviderMenuContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:type" element={<SeriesAndMovies />}></Route>
          <Route path="/:type/:category" element={<AllMoviesSeries />}></Route>
          <Route path="/trending/:type" element={<AllMoviesSeries />}></Route>
          <Route path="/details/:type/:id" element={<Details />}></Route>
          <Route path="/search/:wordSearch" element={<Search />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProviderMenuContext>
  );
}

export default App;
