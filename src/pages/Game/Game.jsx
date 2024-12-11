/*

* GAMEPAD

* Game page (description of a given game)

*/

//! Style import
import "./game.css";

//! Hooks import
import { useLocation } from "react-router-dom";

//! Components import
import GameDescription from "../../components/Game/GameDescription";
import BackToHome from "../../components/General/BackToHome";

//* GAME FUNCTION
function Game() {
  //
  // Location destructuring
  const location = useLocation();
  const { gameId, gameName } = location.state;

  console.log(gameId);

  // Return
  return (
    <main className="container">
      {/* Return to home */}
      <BackToHome></BackToHome>

      {/* Bottom red border */}
      <div className="game-red-border"></div>

      {/* Game description component */}
      <section className="game-description-bloc">
        <h1 className="game-name">{gameName}</h1>
        <GameDescription gameId={gameId}></GameDescription>
      </section>
    </main>
  );
}

export default Game;
