import { useRef, useEffect } from "react";
import { useClient } from "../../context/ClientContext";
import axios from "axios";
import { TextInput, DateInput, SelectSex, NumberInput } from "./FormComponents";

const EditClientForm = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const { updateClient, selectedClient, setSelectedClient } = useClient();
  const formRef = useRef({} as HTMLFormElement);

  const fieldItems = [
    {
      type: "text-input",
      label: "First Name",
      name: "firstName",
      value: selectedClient.firstName,
      required: true,
    },
    {
      type: "text-input",
      label: "Last Name",
      name: "lastName",
      value: selectedClient.lastName,
      required: true,
    },
    {
      type: "date",
      label: "DOB",
      name: "dob",
      value: selectedClient.dob && selectedClient.dob.slice(0, 10),
      required: true,
    },
    {
      type: "select",
      label: "Sex",
      name: "sex",
      value: selectedClient.sex,
      required: true,
    },
    {
      type: "number",
      label: "Contact",
      name: "contact",
      value: selectedClient.contact,
      required: true,
    },
  ];

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setSelectedClient((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    selectedClient.id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedClient.id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      axios({
        method: "PUT",
        url: `http://localhost:15432/clients/${selectedClient.id}`,
        // withCredentials: true,
        data: {
          firstName: selectedClient.firstName,
          lastName: selectedClient.lastName,
          dob: selectedClient.dob,
          sex: selectedClient.sex,
          contact: selectedClient.contact,
        },
      }).then((response) => {
        console.log(response);
        updateClient(response.data);
        formRef.current.reset();
      });
    } catch (err) {
      console.log(err);
    }
    closeDrawer && closeDrawer();
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="flex-col">
          <h3 className="text-orange py-4">Edit client</h3>
          {fieldItems.map((client, index) => {
            if (client.type === "text-input") {
              return (
                <TextInput
                  key={index}
                  label={client.label}
                  name={client.name}
                  value={client.value}
                  handleInput={handleInput}
                  required={client.required}
                />
              );
            } else if (client.type === "date") {
              return (
                <DateInput
                  key={index}
                  label={client.label}
                  name={client.name}
                  value={client.value}
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
                  value={client.value}
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
                  value={client.value}
                  handleInput={handleInput}
                  required={client.required}
                />
              );
            }
          })}
        </div>

        <label
          htmlFor="my-drawer-4"
          className="btn btn-primary btn-sm float-right mt-[10px] mr-[6px]drawer-button hover:bg-orange hover:text-white"
          onClick={() => closeDrawer}
        >
          Cancel
        </label>

        <button
          className="btn btn-primary btn-sm float-right mt-[10px] mr-[6px] hover:bg-orange hover:text-white"
          type="submit"
        >
          Save
        </button>

        {/* <div className="wrapper flex flex-row-reverse">
          <input
            type="submit"
            className="btn btn-primary btn-sm mt-4 hover:bg-orange hover:text-white"
            value="Save"
          />
        </div> */}
      </form>
    </>
  );
};

export default EditClientForm;
