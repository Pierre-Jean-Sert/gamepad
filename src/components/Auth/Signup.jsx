/*

* GAMEPAD

* Sign up component
*/

//! Style import
import "./login-signup.css";

//! Libraries import
import axios from "axios";

//! Hooks import
import { useState, useEffect } from "react";

//! Components import

//* SIGNUP FUNCTION
function Signup({ setComponentMgmt }) {
  //
  // States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Return
  return (
    <div className="logSup-main-bloc">
      <h2>Signup</h2>

      <form className="logSup-login-form">
        <div>
          <input
            className="logSup-large-input"
            id="email"
            type="text"
            placeholder="Email..."
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={email}
          ></input>
          <input
            className="logSup-large-input"
            id="password"
            type="password"
            placeholder="Password..."
            name="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            value={password}
          ></input>
        </div>

        <div>
          <button className="logSup-large-button">Signup</button>
          <p
            className="logSup-link"
            onClick={() => {
              setComponentMgmt("login");
            }}
          >
            Already have an account ?
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
