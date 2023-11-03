import axios from "axios";
import { useEffect } from "react";
import { useClient } from "../context/ClientContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const { setUserToken, userToken } = useClient();
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:15432/users/loggedIn`,
      withCredentials: true,
    })
      .then((response) => {
        console.log("logged in", response);
        if (response.data.loggedInStatus) {
          setUserToken({
            username: response.data.username,
            loggedInStatus: response.data.loggedInStatus,
          });
          console.log(userToken);
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home text-black text-center text-2xl capitalize mt-20">
      Welcome, {userToken.username}! <br />
      <Link
        to="/clients"
        className="btn btn-primary btn-sm py-2 px-2 bg-transparent border-transparent text-darkblue underline underline-offset-4 rounded"
      >
        See client list
      </Link>
    </div>
  );
};

export default Home;
