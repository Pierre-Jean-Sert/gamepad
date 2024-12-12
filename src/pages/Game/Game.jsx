/*

* GAMEPAD

* Game page (description of a given game)

*/

//! Style import
import "./game.css";

//! Libraries import
import axios from "axios";

//! Hooks import
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

//! Components import
import GameDescription from "../../components/Game/GameDescription";
import BackToHome from "../../components/Shared/BackToHome";
import GameStatistics from "../../components/Game/GameStatistics";
import Loader from "../../components/General/Loader";

//* GAME FUNCTION
function Game() {
  //
  // Location destructuring
  const location = useLocation();
  const { gameId, gameName } = location.state;

  // States
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Rawg API Key and Url
  const apiKey = "afbe33d884cf4ff6a866f2f22446a121";
  const url = `https://api.rawg.io/api/games/${gameId}?key=${apiKey}`;

  //useEffect to recover data from Rawg API
  useEffect(() => {
    //
    const fetchData = async () => {
      //
      try {
        // Axios request
        const response = await axios.get(url);

        //Response.data stocked in data state
        setData(response.data);

        //isLoading => false
        setIsLoading(false);

        //
      } catch (error) {
        console.log(error);
      }
    };

    //fetchData calling
    fetchData();
  }, []);

  // Return
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <main className="container">
          {/* Return to home */}
          <BackToHome></BackToHome>

          {/* Game description component */}
          <section className="game-description-bloc">
            <h1 className="game-name">{gameName}</h1>
            {/* Bottom red border */}
            <div className="game-red-border"></div>
            <GameDescription data={data}></GameDescription>
          </section>

          {/* Game statistics component */}
          <section className="game-statistics-bloc">
            <h3 className="game-h3">What do the players think</h3>
            <div className="game-red-border-h3"></div>
            <GameStatistics data={data}></GameStatistics>
          </section>
        </main>
      )}
    </>
  );
}

export default Game;
