export default function Song(props) {
  return (
    <li>
      <img src={props.img} alt="" className="track-img" />
      <div className="details">
        <h2 className="track-name">{props.trackName}</h2>

        <p className="artist-name">{props.artistName}</p>
        <a
          rel="noreferrer"
          target="_blank"
          className="link-song"
          href={props.linkToSong}
        >
          {props.linkToSong}
        </a>
      </div>
    </li>
  );
}
