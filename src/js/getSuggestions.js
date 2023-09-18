const getSuggestions = async function (accToken, topTracksIds) {
  const response = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(
      ","
    )}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accToken}`,
      },
    }
  );

  const data = await response.json();

  return data;
};

export default getSuggestions;
