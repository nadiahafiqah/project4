import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-darkblue text-white">
      <div className="flex-1">
        <a className="text-orange normal-case text-xl ml-10 pointer-events-none">
          APP NAME
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-white hover:text-orange" to="/">
              Dashboard
            </Link>
          </li>
          <li>
            <Link className="text-white hover:text-orange" to="/clients">
              Clients
            </Link>
          </li>
          {/* )} */}
          {/* {userToken.loggedInStatus && ( */}
          <li>
            <Link className="text-white hover:text-orange" to="/calculator">
              Calculator
            </Link>
          </li>
          {/* )} */}
          {/* {userToken.loggedInStatus && ( */}
          <li>
            <a className="text-white hover:text-orange">Logout</a>
          </li>
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
