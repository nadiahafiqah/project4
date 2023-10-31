import axios from "axios";
import { useClient } from "../../context/ClientContext";

const DeleteClientModal = ({ handleToggle, open }) => {
  const { setClients, selectedClient, deleteClient } = useClient();

  const handleClick = async () => {
    //console.log("item deleted => ", JSON.stringify(selectedItem, null, 2));
    try {
      await axios({
        method: "DELETE",
        url: `localhost:15432/clients/${client.id}`,
        withCredentials: true,
      }).then(() => {
        //response
        //console.log(response.data);
        deleteClient(selectedClient.id);
        notifySuccess("Item successfully deleted!");
      });
    } catch (err) {
      console.log(err);
      notifyError();
    }
    handleToggle();
  };

  return (
    <dialog
      id="delete-wishlist-modal"
      className="modal"
      open={open}
      onClose={handleToggle}
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete client</h3>
        <p className="py-4">
          Are you sure you want to delete this client? This action cannot be
          undone.
        </p>
        <div className="btn-wrapper float-right">
          <button className="btn btn-primary mr-2" onClick={handleToggle}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button className="bg-slate-950/50">close</button>
      </form>
    </dialog>
  );
};

export default DeleteClientModal;
