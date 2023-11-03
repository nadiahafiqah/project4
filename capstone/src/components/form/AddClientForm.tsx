import axios from "axios";
import { useRef, useState } from "react";
import { useClient } from "../../context/ClientContext";
import { TextInput, NumberInput, DateInput, SelectSex } from "./FormComponents";

const AddClientForm = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const { addClient } = useClient();
  const formRef = useRef({} as HTMLFormElement);

  const [client, setClient] = useState({
    id: 0,
    firstName: "",
    lastName: "",
    dob: "",
    sex: "",
    contact: 0,
  });

  const fieldItems = [
    {
      type: "text-input",
      label: "First Name",
      name: "firstName",
      value: client.firstName,
      required: true,
    },
    {
      type: "text-input",
      label: "Last Name",
      name: "lastName",
      value: client.lastName,
      required: true,
    },
    {
      type: "date-input",
      label: "DOB",
      name: "dob",
      value: client.dob,
      required: true,
    },
    {
      type: "select",
      label: "Sex",
      name: "sex",
      value: client.sex,
      required: true,
    },
    {
      type: "number",
      label: "Contact",
      name: "contact",
      value: client.contact,
      required: true,
    },
  ];

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
    try {
      axios({
        method: "POST",
        url: `http://localhost:15432/clients`,
        withCredentials: true,
        data: {
          firstName: client.firstName,
          lastName: client.lastName,
          dob: client.dob,
          sex: client.sex,
          contact: client.contact,
        },
      }).then((response) => {
        console.log(client.dob);
        console.log(response);
        addClient(response.data);
        formRef.current.reset();
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="flex-col">
          <h3 className="text-orange py-4">Add new client</h3>
          {fieldItems.map((client, index) => {
            if (client.type === "text-input") {
              return (
                <TextInput
                  key={index}
                  label={client.label}
                  name={client.name}
                  handleInput={handleInput}
                  required={client.required}
                />
              );
            } else if (client.type === "date-input") {
              return (
                <DateInput
                  key={index}
                  label={client.label}
                  name={client.name}
                  handleInput={handleInput}
                  required={client.required}
                />
              );
            } else if (client.type === "number") {
              return (
                <NumberInput
                  key={index}
                  label={client.label}
                  name={client.name}
                  handleInput={handleInput}
                  required={client.required}
                />
              );
            } else if (client.type === "select") {
              return (
                <SelectSex
                  key={index}
                  label={client.label}
                  name={client.name}
                  handleInput={handleInput}
                  required={client.required}
                />
              );
            }
          })}
          <div className="wrapper flex flex-row-reverse">
            <input
              type="submit"
              className="btn btn-primary btn-sm mt-4 hover:bg-orange hover:text-white"
              value="Add Client"
              onClick={() => closeDrawer}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddClientForm;
