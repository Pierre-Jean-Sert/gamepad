/*

* GAMEPAD

* Games page (list all games)

*/

//! Style import
import "./games.css";

//! Libraries import
import axios from "axios";

//! Hooks import
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

//! Images
import logo from "../../assets/gaming-logo.png";
import noImage from "../../assets/image-not-found.webp";

//! Components import
import Filters from "../../components/Games/Filters";
import Paging from "../../components/Games/Paging";

//! Contexts

//* GAMES FUNCTION
function Games() {
  //
  // Def navigate
  const navigate = useNavigate();

  // States
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [lastPageNumber, setLastPageNumber] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Rawg API Key and Url
  const apiKey = "afbe33d884cf4ff6a866f2f22446a121";
  const defaultUrl = `https://api.rawg.io/api/games?key=${apiKey}&ordering=released`;
  const [url, setUrl] = useState(defaultUrl);

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

        // Last page constructor
        const lastPage = Math.ceil(response.data.count / 20);
        setLastPageNumber(lastPage);

        //isLoading => false
        setIsLoading(false);

        //
      } catch (error) {
        console.log(error);
      }
    };

    //fetchData calling
    fetchData();
  }, [url]);

  // Return
  return (
    <main className="container">
      {/* Game header */}
      <section className="games-first-bloc">
        {/* Logo and title */}
        <div className="games-header">
          <img className="games-logo" src={logo} alt="Gamepad logo"></img>
          <h1>Gamepad</h1>
        </div>

        {/* Search bar */}
        <div className="games-search-bar">
          <input
            id="search"
            type="text"
            placeholder="Search for a game..."
            onChange={(event) => {
              setIsLoading(true);

              const userSearch = event.target.value;
              setSearch(userSearch);

              const newUrl = `https://api.rawg.io/api/games?key=${apiKey}&search=${userSearch}`;
              setUrl(newUrl);
              setIsSearching(true);
              setPageNumber(1);
            }}
            value={search}
          ></input>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>

        {/* Search comment */}
        {isLoading || (
          <>
            {isSearching ? (
              <div className="games-is-searching">
                <p className="games-search-result">
                  Search result for "{search}"
                </p>

                <p className="games-search-comment">
                  {data.count.toLocaleString("fr-FR")} games
                </p>
              </div>
            ) : (
              <p className="games-search-comment">
                Search {data.count.toLocaleString("fr-FR")} games
              </p>
            )}
          </>
        )}
      </section>

      {/* Game list */}
      <section className="games-second-bloc">
        {isLoading ? (
          <div className="loader-container">
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <>
            {/* Game search filters with component */}
            {isSearching ? (
              <Filters
                setUrl={setUrl}
                apiKey={apiKey}
                search={search}
              ></Filters>
            ) : (
              <h2>Most Relevance Games</h2>
            )}

            {/* Game map */}
            <div className="games-map">
              {data.results.map((game, index) => {
                //
                return (
                  <>
                    <article
                      key={index}
                      className="games-article"
                      onClick={() => {
                        navigate("/game", {
                          state: { gameId: game.id, gameName: game.name },
                        });
                      }}
                    >
                      <img
                        key={game.id}
                        src={
                          game.background_image
                            ? game.background_image
                            : noImage
                        }
                        alt="Game image"
                      ></img>
                      <p key={game.name}>{game.name}</p>
                    </article>
                  </>
                );
              })}
            </div>

            {/* Game paging */}
            <Paging
              data={data}
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              setUrl={setUrl}
              setIsLoading={setIsLoading}
              lastPageNumber={lastPageNumber}
            ></Paging>
          </>
        )}
      </section>
    </main>
  );
}

export default Games;
