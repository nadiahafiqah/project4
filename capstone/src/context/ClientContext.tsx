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

  const addClient = (client) => {
    setClients([...clients, client]);
  };

  const deleteClient = (deletedClient) => {
    const newClientsList = clients.filter((client) => {
      return client.id !== deletedClient.id;
    });
    setClients([newClientsList]);
  };

  return (
    <ClientContext.Provider value={{ addClient, deleteClient }}>
      {children}
    </ClientContext.Provider>
  );
}
