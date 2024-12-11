/*

* GAMEPAD

* App function

*/

//! Style import
import "./App.css";

//! Libraries import
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//! Pages import
import Games from "./pages/Games/Games";
import Game from "./pages/Game/Game";

//! Components import
import Header from "./components/General/Header";
import Footer from "./components/General/Footer";

//! Contexts

//* APP FUNCTION
function App() {
  // Return
  return (
    <>
      <Router>
        {/* HEADER */}
        <Header></Header>

        {/* ROUTES */}
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Games></Games>}></Route>

          {/* GAME */}
          <Route path="/" element={<Game></Game>}></Route>
        </Routes>

        {/* FOOTER */}
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
