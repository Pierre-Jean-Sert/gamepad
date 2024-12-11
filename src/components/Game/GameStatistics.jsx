/*

* GAMEPAD

* Game Statistics Component 

*/

//! Style import
import "./game-statistics.css";

//! Libraries import
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import ReactApexCharts from "react-apexcharts";

//! Hooks import
import { useState, useEffect } from "react";

//! Components import
import Loader from "../General/Loader";
import stars from "../../utils/stars";

//! Images
import reddit from "../../assets/reddit-logo.png";
import twitch from "../../assets/twitch-logo.png";
import youtube from "../../assets/youtube-logo.png";

//* GAME DESCRIPTION FUNCTION
function GameStatistics({ gameId }) {
  //
  // Def navigate
  const navigate = useNavigate();

  // States
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const [pieData, setPieData] = useState([]);
  const [pieLegend, setPieLegend] = useState([]);

  // Rawg API Key and Url
  const apiKey = "afbe33d884cf4ff6a866f2f22446a121";
  const url = `https://api.rawg.io/api/games/${gameId}?key=${apiKey}`;

  // Stars
  let rating = "";
  if (data.rating) {
    rating = stars(data.rating);
  }

  // Pie chart options
  const [chartOptions, setChartOptions] = useState({
    series: pieData,
    options: {
      chart: {
        type: "donut",
        offsetY: 20,
      },
      labels: pieLegend,
      stroke: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 350,
            },
          },
        },
      ],
    },
  });

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

        // Data for pie chart
        if (response.data.ratings) {
          const updatedPieData = response.data.ratings.map(
            (rating) => rating.count
          );
          const updatedPieLegend = response.data.ratings.map(
            (rating) => rating.title
          );
          setPieData(updatedPieData);
          setPieLegend(updatedPieLegend);
        }

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

  //useEffect for pie chart
  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      series: pieData,
      options: {
        ...prevOptions.options,
        labels: pieLegend,
        legend: {
          ...prevOptions.options.legend,

          labels: {
            colors: "#FFFFFF",
          },
          position: "bottom",
        },
      },
    }));
  }, [pieData, pieLegend]);

  // Return
  return (
    <>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="gs-bloc">
          {/* Statistics bloc */}
          <div className="gs-left-bloc">
            {/* Social networks */}
            <div className="gs-social-networks">
              <div className="gs-social-networks-bloc">
                <img
                  className="gs-click"
                  src={reddit}
                  alt="Reddit logo"
                  onClick={() => {
                    if (data.reddit_url !== "") {
                      window.location.href = data.reddit_url;
                    }
                  }}
                />
                <p>{data.reddit_count.toLocaleString("fr-FR")}</p>
              </div>

              <div className="gs-social-networks-bloc">
                <img src={twitch} alt="Reddit logo" />
                <p>{data.twitch_count.toLocaleString("fr-FR")}</p>
              </div>

              <div className="gs-social-networks-bloc">
                <img src={youtube} alt="Reddit logo" />
                <p>{data.youtube_count.toLocaleString("fr-FR")}</p>
              </div>
            </div>

            {/* Ratings*/}
            <div className="gs-social-networks">
              <div className="gs-social-networks-bloc">
                <p>Rating</p>
                <div className="gs-rating">
                  {rating
                    ? rating.map((star, index) => {
                        return star === 1 ? (
                          <i key={index} className="fa-solid fa-star"></i>
                        ) : (
                          <i key={index} className="fa-regular fa-star"></i>
                        );
                      })
                    : "No rating"}
                </div>
              </div>

              <div className="gs-social-networks-bloc">
                <p>Reviews count</p>
                <div className="gs-rating">
                  {data.reviews_count.toLocaleString("fr-FR")}
                </div>
              </div>
            </div>

            {/* Metacritic*/}
            <div className="gs-social-networks">
              <div className="gs-social-networks-bloc">
                <p>Metacritic</p>
                <div
                  className={
                    data.metacritic > 50
                      ? "gs-metacritic gs-metacritic-green"
                      : "gs-metacritic gs-metacritic-red"
                  }
                  onClick={() => {
                    if (data.metacritic_url !== "") {
                      window.location.href = data.metacritic_url;
                    }
                  }}
                >
                  {data.metacritic ? data.metacritic + " / 100" : "No rating"}
                </div>
              </div>
            </div>
          </div>

          {/* Graphs */}
          <div className="gs-right-bloc">
            <ReactApexCharts
              options={chartOptions.options}
              series={chartOptions.series}
              type="donut"
              height={310}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default GameStatistics;
