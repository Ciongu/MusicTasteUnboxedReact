import { useEffect, useState } from "react";
import Auth from "./components/auth/auth";
import Page from "./components/page/page";
import { requestAuth, accToken } from "./js/auth";
import getSuggestions from "./js/getSuggestions";
import getTopTracks from "./js/getTopTracks";
import logOut from "./js/logOut";

function App() {
  const [accessToken, setAccessToken] = useState(accToken);
  const [topTracks, setTopTracks] = useState();
  const [topTracksIds, setTopTracksIds] = useState([]);
  const [suggestions, setSuggestions] = useState();

  useEffect(() => {
    getTopTracks(accessToken).then((response) => {
      setTopTracks(response.items);

      const trackIds = response.items
        ? response.items.map((track) => track.id)
        : null;

      setTopTracksIds(trackIds);
    });
  }, [accessToken]);

  const fetchSuggestions = function () {
    getSuggestions(accessToken, topTracksIds).then((response) => {
      setSuggestions(response.tracks);
    });
  };

  return (
    <div>
      {accessToken ? (
        <Page
          logOut={logOut}
          accToken={accToken}
          suggestions={suggestions}
          topTracks={topTracks}
          fetchSuggestions={fetchSuggestions}
        />
      ) : (
        <Auth accToken={accToken} onClick={requestAuth} />
      )}
    </div>
  );
}

export default App;
