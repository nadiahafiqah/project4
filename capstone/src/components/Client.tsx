import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { DateTime } from "luxon";
import { useClient } from "../context/ClientContext";
import DeleteClientModal from "./form/DeleteClientModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Client = (client) => {
  const { setSelectedClient, setClientFormType } = useClient();

  const convertDate = (date: string) => {
    const dt = DateTime.fromISO(date);
    return dt.toLocaleString(DateTime.DATE_MED);
  };

  const editClientForm = () => {
    setSelectedClient(client);
    setClientFormType("edit");
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setSelectedClient(client);
    setOpen((prev) => !prev);
  };

  const handleDetails = () => {
    setSelectedClient(client);
  };

  return (
    <tr className="hover:bg-darkblue hover:text-orange">
      {/* <td>{client.id}</td> */}
      <td>
        {client.firstName} {client.lastName}
      </td>
      <td>{client.sex}</td>
      <td>{convertDate(client.dob)}</td>
      <td>{client.contact}</td>
      <td>
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-primary btn-sm py-1 px-2 bg-transparent border-transparent text-orange rounded"
          onClick={editClientForm}
        >
          <FontAwesomeIcon icon={faUserEdit} />
        </label>
        <label
          htmlFor="delete"
          className="drawer-button btn btn-primary btn-sm py-1 px-2 mx-1 bg-transparent border-transparent text-orange rounded"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </label>
        <DeleteClientModal handleToggle={handleToggle} open={open} />

        <Link
          to={`/clients/${client.id}`}
          className="btn btn-primary btn-sm py-1 px-2 bg-transparent border-transparent text-orange rounded"
          onClick={handleDetails}
        >
          Details
        </Link>
      </td>
    </tr>
  );
};

export default Client;
