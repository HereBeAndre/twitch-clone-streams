import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Twitch-Clone
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Back to streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
