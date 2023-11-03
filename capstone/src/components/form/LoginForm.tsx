import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UsernameInput, PasswordInput } from "./FormComponents";

const LoginForm = () => {
  const [user, setUser] = useState<User>({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState<string | undefined>("");

  const navigate = useNavigate();

  const fieldItems = [
    { type: "text-input", label: "Username", name: "username", required: true },
    {
      type: "password-input",
      label: "Password",
      name: "password",
      required: true,
    },
  ];

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage("");
    setUser((prev: User) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      axios({
        method: "POST",
        url: `http://localhost:15432/users/login`,
        data: {
          username: user.username,
          password: user.password,
        },
        withCredentials: true,
      }).then((response) => {
        // console.log(response.data);
        if (response.data.success) {
          // setUserToken({username: response.data.cookies.username, token: response.data.cookies.token});
          setTimeout(() => {
            navigate("/");
          }, 500);
        } else {
          setMessage(response.data.message);
        }
      });
    } catch (err) {
      console.log("An error occurred: ", err);
    }
  };

  return (
    <div className=" bg-slate-50 p-8 rounded-3xl max-w-lg flex flex-row flex-wrap m-20">
      <div className="text-xl font-semibold basis-1/2">Account Login</div>
      <Link className="basis-1/2 text-right" to="/signup">
        Sign Up
      </Link>
      <form className="basis-full mt-4" onSubmit={handleSubmit}>
        {fieldItems.map((item, index) => {
          if (item.type === "text-input") {
            return (
              <UsernameInput
                key={index}
                label={item.label}
                name={item.name}
                handleInput={handleInput}
                required={item.required}
              />
            );
          } else if (item.type === "password-input") {
            return (
              <PasswordInput
                key={index}
                label={item.label}
                name={item.name}
                handleInput={handleInput}
                required={item.required}
              />
            );
          }
        })}
        {message && (
          <div className="bg-red-100 text-red-700 py-3 w-full text-center mt-3 mx-auto">
            {message}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary mr-0 ml-auto mt-4 block"
        >
          Login
        </button>
      </form>
    </div>

    // <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    //   <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
    //     <h1 className="text-3xl font-semibold text-center text-gray-700">
    //       FA App Name
    //     </h1>
    //     <form className="space-y-4">
    //       <div>
    //         <label className="label">
    //           <span className="text-base label-text">Username</span>
    //         </label>
    //         <input
    //           type="text"
    //           placeholder="Username"
    //           className="w-full input input-bordered"
    //         />
    //       </div>
    //       <div>
    //         <label className="label">
    //           <span className="text-base label-text">Password</span>
    //         </label>
    //         <input
    //           type="password"
    //           placeholder="Enter Password"
    //           className="w-full input input-bordered"
    //         />
    //       </div>
    //       <a
    //         href="#"
    //         className="text-xs text-gray-600 hover:underline hover:text-blue-600"
    //       >
    //         Forget Password?
    //       </a>
    //       <div>
    //         <button className="btn btn-block">Login</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default LoginForm;
