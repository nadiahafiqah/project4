import { useClient } from "../context/ClientContext";
import Client from "./Client";
import { useEffect } from "react";
import axios from "axios";

const ClientsTable = () => {
  const { clients, setClients } = useClient();

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:15432/clients`,
      // withCredentials: true,
    })
      .then((response) => {
        setClients(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-[80%] m-auto pb-[5%]">
        <table className="table text-black">
          <thead className="text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Sex</th>
              <th>Date of Birth</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((client) => {
                return <Client key={client.id} {...client} />;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClientsTable;
