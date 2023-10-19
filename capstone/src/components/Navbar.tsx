import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar bg-baseBlue text-white">
      <IoMenuSharp />
      <div className="flex-1">
        <a className="text-orange normal-case text-xl ml-10 pointer-events-none">
          APP NAME
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {/* {userToken.username && ( */}
          <li>
            <a className="text-lightblue pointer-events-none">Welcome, user!</a>
          </li>
          {/* )} */}
          {/* {userToken.loggedInStatus && ( */}
          <li>
            <Link className="text-white hover:text-orange" to="/">
              Dashboard
            </Link>
          </li>
          {/* )} */}
          {/* {userToken.loggedInStatus && ( */}
          <li>
            <Link className="text-white hover:text-orange" to="/">
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
