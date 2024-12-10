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

//! Components import
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        </Routes>

        {/* FOOTER */}
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
