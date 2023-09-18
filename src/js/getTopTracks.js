const getTopTracks = async function (accToken) {
  const response = await fetch(
    "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
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

export default getTopTracks;
