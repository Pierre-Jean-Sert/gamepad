/*

* GAMEPAD

* Auth Page
*/

//! Style import
import "./auth.css";

//! Images
import logo from "../../assets/gaming-logo.png";

//! Components import
import Login from "../../components/Auth/Login";

//* AUTH FUNCTION
function Auth() {
  //

  // Return
  return (
    <main className="container screen">
      <div className="auth-bloc">
        {/*  Left bloc */}
        <div className="auth-left-bloc">
          {/*  Logo */}
          <img className="auth-logo" src={logo} alt="Gamepad logo" />

          <div className="auth-title">
            <h2>How it works ?</h2>
            <p className="auth-section-red "></p>
          </div>

          {/*  Paragraphs */}
          <div className="auth-paragraph">
            <div>
              <i className="fa-regular fa-user"></i>
              <p>
                Log in to your free account to be able to get all features of
                Gamepad
              </p>
            </div>

            <div>
              <i className="fa-regular fa-bookmark"></i>
              <p>Add a game to your collection</p>
            </div>

            <div>
              <i className="fa-regular fa-comment"></i>
              <p>Leave a review for a game</p>
            </div>
          </div>
        </div>

        {/*  Right bloc */}
        <div className="auth-right-bloc">Login ou signin</div>
      </div>
    </main>
  );
}

export default Auth;
