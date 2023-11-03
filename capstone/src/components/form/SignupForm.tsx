import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { PasswordInput, UsernameInput } from "./FormComponents";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
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
        url: `http://localhost:15432/users/signup`,
        data: {
          username: user.username,
          password: user.password,
        },
      }).then((response) => {
        // console.log(response.data);
        if (!response.data.message) {
          setMessage("Sign up successful!");
          setTimeout(() => {
            navigate("/login");
          }, 800);
        } else {
          setMessage("Username exists. Please try another username!");
        }
      });
    } catch (err) {
      console.log("An error occurred: ", err);
    }
  };

  return (
    <div className=" bg-darkblue p-8 rounded-3xl max-w-lg flex flex-row flex-wrap m-20">
      <div className="text-xl font-semibold m-auto">Register</div>
      <div className="basis-full text-sm justify-center p-1">
        Have an account?{" "}
        <Link
          className="basis-1/2 text-right text-orange hover:text-white"
          to="/login"
        >
          Log in
        </Link>
      </div>
      <form onSubmit={handleSubmit} className="basis-full mt-4">
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
        {message &&
          (message === "Sign up successful!" ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center mt-3">
              {message}
            </div>
          ) : (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center mt-3">
              {message}
            </div>
          ))}
        <button
          type="submit"
          className="btn btn-primary btn-sm m-auto mt-4 block hover:bg-orange hover:text-white"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
