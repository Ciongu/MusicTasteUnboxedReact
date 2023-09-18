import "./auth.css";

export default function Auth(props) {
  return (
    <div className="container">
      <div className="title">
        <h1 className="title-auth">YOUR MUSIC TASTE UNBOXED</h1>
        <h3>
          powered body
          <img
            className="logo-auth"
            src="./imgs/spotify-logo.png"
            alt="spotify-logo"
          />
        </h3>
      </div>
      <button onClick={props.onClick} className="req-auth button-auth">
        LOG IN
      </button>
    </div>
  );
}
