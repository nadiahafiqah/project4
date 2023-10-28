import axios from "axios";
import { useState } from "react";
import { useClient } from "../../context/ClientContext";

const AddClient = () => {
  const { addClient, notifySuccess, notifyError } = useClient();
  const [client, setClient] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    sex: "",
    contact: 0,
  });

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setClient((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log("item sent => ", JSON.stringify(item, null, 2));
    // let res: Item;
    try {
      axios({
        method: "POST",
        url: `localhost:5173/${user.id}`,
        // withCredentials: true,
        data: {
          firstName: client.firstName,
          lastName: client.lastName,
          dob: client.dob,
          sex: client.sex,
          contact: client.contact,
        },
      })
        .then((response) => {
          res = response.data;
          uploadImage();
        })
        .then((response) => {
          console.log(response);
          setTimeout(() => addClient(res), 900);
          formRef.current.reset();
          notifySuccess("Client successfully added!");
        });
    } catch (err) {
      console.log(err);
      notifyError();
    }
  };

  return (
    <div className="form-control w-full max-w-xs">
      <form onSubmit={handleSubmit}>
        <label className="label">
          <span className="label-text">First Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={handleInput}
        />
        <label className="label">
          <span className="label-text">Last Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={handleInput}
        />
        <label className="label">
          <span className="label-text">Date of Birth</span>
        </label>
        <input
          type="date"
          className="input input-bordered w-full max-w-xs"
          onChange={handleInput}
        />
        <label className="label">
          <span className="label-text">Sex</span>
        </label>
        <select className="select select-bordered">
          <option disabled selected>
            Select one
          </option>
          <option>Female</option>
          <option>Male</option>
        </select>
        <label className="label">
          <span className="label-text">Contact Number</span>
        </label>
        <input
          type="text"
          className="input input-bordered w-full max-w-xs"
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default AddClient;
