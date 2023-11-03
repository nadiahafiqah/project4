// import ClientSearch from "../components/ClientSearch";
import ClientsTable from "../components/ClientsTable";
import AddClientForm from "../components/form/AddClientForm";
import EditClientForm from "../components/form/EditClientForm";
import { useClient } from "../context/ClientContext";
import { useRef } from "react";

const ClientList = () => {
  const drawerRef = useRef({} as HTMLInputElement);
  const { clientFormType, setClientFormType } = useClient();

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  const handleAddClick = () => {
    setClientFormType("add");
  };

  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="text-black text-center m-10">Clients List</h2>

        <div className="flex w-[90%] justify-end pb-5">
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary border-black btn-sm hover:bg-orange hover:text-white"
            onClick={handleAddClick}
          >
            Add New Client
          </label>
        </div>
        {/* <div className="flex w-[90%] justify-end pb-5">
          <ClientSearch />
        </div> */}

        <ClientsTable />
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          className="drawer-overlay"
          aria-label="close sidebar"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {clientFormType === "edit" ? (
            <EditClientForm closeDrawer={closeDrawer} />
          ) : (
            <AddClientForm closeDrawer={closeDrawer} />
          )}
        </ul>
      </div>

      {/* <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <AddClientForm />
        </ul>
      </div> */}
    </div>
  );
};

export default ClientList;
