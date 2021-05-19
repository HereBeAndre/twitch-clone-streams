import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          Back to streams
        </Link>
      </div>
    </div>
  );
};

export default Header;
