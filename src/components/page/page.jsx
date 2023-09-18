import "./page.css";
import Song from "../songs/songs";
import { useEffect, useState } from "react";

export default function Page(props) {
  const [data, setData] = useState(props.topTracks);
  const [type, setType] = useState("TOP TRACKS");

  useEffect(() => {
    setData(props.topTracks);
    props.fetchSuggestions();
  }, [props.topTracks]);

  const renderTopTracks = function () {
    setData(props.topTracks);
    setType("TOP TRACKS");
  };

  const renderSuggestions = function () {
    setData(props.suggestions);
    setType("SUGGESTIONS");
  };

  return (
    <div>
      <header>
        <img
          className="logo-page"
          src="./imgs/spotify-logo.png"
          alt="Spotify Logo"
        />
        <button onClick={props.logOut} className="log-out">
          Log Out
        </button>
      </header>
      <main>
        <div className="songs">
          <div className="swiper-slide">
            <h1 className="section-title">{type}</h1>
            <ul className="top-tracks">
              {data
                ? data.map((track) => (
                    <Song
                      key={track.id}
                      img={track.album.images[1].url}
                      trackName={track.name}
                      artistName={track.artists[0].name}
                      linkToSong={track.external_urls.spotify}
                    />
                  ))
                : null}
            </ul>
          </div>
        </div>
        <div className="buttons">
          <button onClick={renderTopTracks} className="top">
            TOP TRACKS
          </button>
          <button onClick={renderSuggestions} className="suggestions">
            SUGGESTIONS
          </button>
        </div>
      </main>
    </div>
  );
}
