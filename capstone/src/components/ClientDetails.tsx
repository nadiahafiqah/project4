import { useClient } from "../context/ClientContext";
import { useEffect } from "react";
import axios from "axios";
import { DateTime } from "luxon";

const ClientDetails = () => {
  const { selectedClient, setSelectedClient, setPolicies } = useClient();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:15432/clients/${selectedClient.id}`,
      // withCredentials: true,
    })
      .then((response) => {
        setSelectedClient(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const convertDate = (date: string) => {
    const dt = DateTime.fromISO(date);
    return dt.toLocaleString(DateTime.DATE_MED);
  };

  return (
    <div className="w-[60%] bg-gray-200 m-auto rounded-lg text-black p-10">
      <div className="flex flex-row">
        <div>
          <p className="pb-2">
            Full Name:{" "}
            <span className="font-bold">
              {selectedClient.firstName} {selectedClient.lastName}
            </span>
          </p>
          <p className="pb-2">
            Sex: <span className="font-bold">{selectedClient.sex}</span>
          </p>
          <p className="pb-2">
            Birthday:
            <span className="font-bold">
              {" "}
              {convertDate(selectedClient.dob)}
            </span>
          </p>
          Contact Number:
          <span className="font-bold"> {selectedClient.contact}</span>
        </div>
        <div className="flex w-[70%] justify-end mt-[10%]">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary border-black btn-sm hover:bg-orange hover:text-white"
          >
            Add New Policy
          </label>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
