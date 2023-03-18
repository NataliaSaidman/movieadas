import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Details } from "./components/Details/Details"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/details/:type/:id"
          element={<Details />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
