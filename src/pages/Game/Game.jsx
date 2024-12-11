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
import BackToHome from "../../components/Shared/BackToHome";
import GameStatistics from "../../components/Game/GameStatistics";

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

      {/* Game description component */}
      <section className="game-description-bloc">
        <h1 className="game-name">{gameName}</h1>
        {/* Bottom red border */}
        <div className="game-red-border"></div>
        <GameDescription gameId={gameId}></GameDescription>
      </section>

      {/* Game statistics component */}
      <section className="game-statistics-bloc">
        <h3 className="game-h3">Player ratings</h3>
        <div className="game-red-border-h3"></div>
        <GameStatistics gameId={gameId}></GameStatistics>
      </section>
    </main>
  );
}

export default Game;
