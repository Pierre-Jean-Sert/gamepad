/*

* GAMEPAD

* Game Tab component

*/

//! Style import
import "./game-tab.css";

//! Hooks import
import { useNavigate } from "react-router-dom";

//! Images
import noImage from "../../assets/image-not-found.webp";

//* Game Tab FUNCTION
function GameTab({ dataToMap }) {
  //
  // Def navigate
  const navigate = useNavigate();

  // Return
  return (
    <>
      <div className="gt-map">
        {dataToMap.map((game, index) => {
          //
          return (
            <>
              <article
                key={index}
                className="gt-article"
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/game", {
                    state: { gameId: game.id, gameName: game.name },
                  });
                }}
              >
                <img
                  key={game.id}
                  src={game.background_image ? game.background_image : noImage}
                  alt="Game image"
                ></img>
                <p key={game.name}>{game.name}</p>
              </article>
            </>
          );
        })}
      </div>
    </>
  );
}

export default GameTab;
