import axios from "axios";
import { useClient } from "../../context/ClientContext";
import { DeleteModalProps } from "../../types";

const DeleteClientModal = ({ handleToggle, open }: DeleteModalProps) => {
  const { setClients, selectedClient, deleteClient } = useClient();

  const handleClick = async () => {
    //console.log("item deleted => ", JSON.stringify(selectedItem, null, 2));
    try {
      await axios({
        method: "DELETE",
        url: `http://localhost:15432/clients/${selectedClient.id}`,
        withCredentials: true,
      }).then(() => {
        //response
        //console.log(response.data);
        deleteClient(selectedClient.id);
      });
    } catch (err) {
      console.log(err);
    }
    handleToggle();
  };

  return (
    <dialog
      id="delete-client-modal"
      className="modal"
      open={open}
      onClose={handleToggle}
    >
      <div className="modal-box bg-lightblue text-black">
        <h3 className="font-bold text-lg">Delete client</h3>
        <p className="py-4">
          Are you sure you want to delete this client? This action cannot be
          undone.
        </p>
        <div className="btn-wrapper float-right">
          <button
            className="btn btn-primary btn-sm mr-2 hover:bg-darkblue hover:text-orange"
            onClick={handleToggle}
          >
            Cancel
          </button>
          <button
            className="btn btn-primary btn-sm hover:bg-darkblue hover:text-orange"
            onClick={handleClick}
          >
            Delete
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="bg-slate-950/50">Close</button>
      </form>
    </dialog>
  );
};

export default DeleteClientModal;
