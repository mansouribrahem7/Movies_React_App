import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="p-2 d-flex flex-md-row flex-column justify-content-between">
        <div className="leftNav flex-md-row flex-column d-flex align-items-center">
          <h1 className="m-0">Noxe</h1>
          <ul className="list-unstyled d-flex flex-md-row flex-column m-0 align-items-center">
            <li className="px-3">
              <Link>Home</Link>
            </li>
            <li className="px-2">
              <Link>People</Link>
            </li>
            <li className="px-2">
              <Link>Movies</Link>
            </li>
            <li className="px-2">
              <Link>Tv</Link>
            </li>
            <li className="px-2">
              <Link>About</Link>
            </li>
            <li className="px-2">
              <Link>Network</Link>
            </li>
          </ul>
        </div>

        <div className="rightNav flex-md-row flex-column d-flex align-items-center">
          <div className="social-media flex-md-row flex-column d-flex align-items-center">
            <i className="fab mx-1 fa-facebook"></i>
            <i className="fab mx-1 fa-twitinstagramter"></i>
            <i className="fab mx-1 fa-instagram"></i>
            <i className="fab mx-1 fa-spotify"></i>
            <i className="fab mx-1 fa-youtube"></i>
          </div>
          <ul className="list-unstyled flex-md-row flex-column  d-flex m-0 align-items-center">
            <li className="px-2">
              <Link to={"login"}>Login</Link>
            </li>
            <li className="px-2">
              <Link to={"/"}>Register</Link>
            </li>
            <li className="px-2">
              <span>LogOut</span>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
