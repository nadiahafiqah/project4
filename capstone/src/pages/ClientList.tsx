import ClientSearch from "../components/ClientSearch";
import ClientsTable from "../components/ClientsTable";

const ClientList = () => {
  return (
    <>
      <h2 className="text-black text-center m-10">Clients List</h2>
      <div className="flex w-[90%] justify-end pb-10">
        <button className="btn btn-sm hover:bg-orange hover:text-darkblue">
          Add new client
        </button>
        <ClientSearch />
      </div>
      <ClientsTable />
    </>
  );
};

export default ClientList;
