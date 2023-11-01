import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { DateTime } from "luxon";
import { useClient } from "../context/ClientContext";
import DeleteClientModal from "./form/DeleteClientModal";
import { useState } from "react";

const Client = (client) => {
  const { setSelectedClient, setEditFormType } = useClient();

  const convertDate = (date: string) => {
    const dt = DateTime.fromISO(date);
    return dt.toLocaleString(DateTime.DATE_MED);
  };

  const editClientForm = () => {
    setSelectedClient(client);
    setEditFormType("edit");
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setSelectedClient(client);
    setOpen((prev) => !prev);
  };

  return (
    <tr className="hover:bg-darkblue hover:text-orange">
      <td>{client.id}</td>
      <td>
        {client.firstName} {client.lastName}
      </td>
      <td>{client.sex}</td>
      <td>{convertDate(client.dob)}</td>
      <td>{client.contact}</td>
      <td>
        <label
          htmlFor="my-drawer-4"
          className="drawer-button btn btn-primary py-1 px-2 bg-transparent border-transparent text-orange rounded"
          onClick={editClientForm}
        >
          <FontAwesomeIcon icon={faUserEdit} />
        </label>
        <label
          htmlFor="delete"
          className="drawer-button btn btn-primary py-1 px-2 bg-transparent border-transparent text-orange rounded"
          onClick={handleToggle}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </label>
        <DeleteClientModal handleToggle={handleToggle} open={open} />

        {/* <label
          htmlFor="delete"
          className="drawer-button btn btn-primary py-1 px-2 bg-transparent border-transparent text-orange rounded"
        >
          Details
        </label> */}
      </td>
    </tr>
  );
};

export default Client;
