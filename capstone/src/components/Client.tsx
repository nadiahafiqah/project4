import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons/faTrashAlt";
import { DateTime } from "luxon";

const Client = (client) => {
  const convertDate = (date: string) => {
    const dt = DateTime.fromISO(date);
    return dt.toLocaleString(DateTime.DATE_MED);
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
          htmlFor="edit-drawer"
          // onClick={handleEditClick}
          className="drawer-button btn btn-primary py-1 px-2 bg-transparent border-transparent text-orange rounded"
        >
          <FontAwesomeIcon icon={faUserEdit} />
        </label>
        <label
          htmlFor="delete"
          // onClick={handleEditClick}
          className="drawer-button btn btn-primary py-1 px-2 bg-transparent border-transparent text-orange rounded"
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </label>{" "}
        <label
          htmlFor="delete"
          // onClick={handleEditClick}
          className="drawer-button btn btn-primary py-1 px-2 bg-transparent border-transparent text-orange rounded"
        >
          Details
        </label>
      </td>
    </tr>
  );
};

export default Client;
