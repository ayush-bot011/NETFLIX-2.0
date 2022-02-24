import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "./axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import Tooltip from "@material-ui/core/Tooltip";
const Row = (props) => {
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    host: "https://www.youtube.com",
    playerVars: {
      autoplay: 1,
      controls: 0,
      autohide: 1,
      wmode: "opaque",
      origin: "http://localhost:8100",
    },
  };

  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(item?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  const [rowItems, setRowItems] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  //runs once when component is mounted
  useEffect(() => {
    axios.get(props.fetchURL).then((res) => {
      setRowItems(res.data.results);
    });
  }, [props.fetchURL]);
  console.log(rowItems);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="row_posters">
        {rowItems.map(
          (item) =>
            ((props.isLargeRow && item.poster_path) ||
              (!props.isLargeRow && item.backdrop_path)) && (
              <Tooltip
                placement="bottom"
                title={item?.original_name || item?.original_title}
                key={item.id}
              >
                <img
                  className={`row_poster ${
                    props.isLargeRow && "row_poster-large"
                  }`}
                  key={item.id}
                  src={`${base_url}${
                    props.isLargeRow ? item.poster_path : item.backdrop_path
                  }`}
                  alt={item.name || item.title}
                  onClick={() => handleClick(item)}
                />
              </Tooltip>
            )
        )}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
