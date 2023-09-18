const logOut = function () {
  const url = "https://accounts.spotify.com/en/logout";
  const spotifyLogoutWindow = window.open(
    url,
    "Spotify Logout",
    "width=700,height=500,top=40,left=40"
  );

  setTimeout(() => spotifyLogoutWindow.close(), 100);
  setTimeout(
    () =>
      (window.location.href =
        "https://ciongu.github.io/MusicTasteUnboxedReact/"),
    101
  );
};

export default logOut;
