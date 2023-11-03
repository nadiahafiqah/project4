import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useClient } from "../context/ClientContext";

const Navbar = () => {
  const { userToken, setUserToken } = useClient();
  const navigate = useNavigate();

  const logoutHandler = () => {
    try {
      axios({
        method: "GET",
        url: `http://localhost:15432/users/logout`,
        withCredentials: true,
      }).then(() => {
        setUserToken({
          username: undefined,
          loggedInStatus: false,
        });
        setTimeout(() => {
          navigate("/login");
        }, 500);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("user token" + JSON.stringify(userToken));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userToken]);

  return (
    <div className="navbar bg-darkblue text-white">
      <div className="flex-1">
        <a className="text-orange normal-case text-xl ml-10 pointer-events-none">
          APP NAME
        </a>
      </div>
      {userToken.loggedInStatus && (
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
            <li>
              <Link className="text-white hover:text-orange" to="/calculator">
                Calculator
              </Link>
            </li>
            <li>
              <a
                className="text-white hover:text-orange"
                onClick={logoutHandler}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
