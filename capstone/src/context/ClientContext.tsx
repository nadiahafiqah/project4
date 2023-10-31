import { ReactNode, createContext, useContext, useState } from "react";

const ClientContext = createContext({} as ClientContext);

const defaultClient = {
  uuid: "",
  id: "",
  firstName: "",
  lastName: "",
  dob: "",
  sex: "",
  contact: 0,
};

export const useClient = () => {
  return useContext(ClientContext);
};

export function ClientProvider({ children }: ClientProviderProps) {
  const [clients, setClients] = useState([]);
  const [seletedClient, setSelectedClient] = useState(defaultClient);

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  const deleteClient = (deletedClient) => {
    const newClientsList = clients.filter((client) => {
      return client.id !== deletedClient.id;
    });
    setClients([newClientsList]);
  };

  const updateClient = (newClient) => {
    const newClientsList = clients.map((client) => {
      return client.id === newClient.id ? newClient : client;
    });
    setClients([...clients, newClientsList]);
  };

  return (
    <ClientContext.Provider
      value={{
        addClient,
        deleteClient,
        updateClient,
        seletedClient,
        setSelectedClient,
        clients,
        setClients,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}