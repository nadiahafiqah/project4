import { ReactNode, createContext, useContext, useState } from "react";
import { Token } from "../types";

const ClientContext = createContext({} as ClientContext);

type ClientProviderProps = {
  children: ReactNode;
};

type ClientContext = {
  userToken: Token;
  setUserToken: React.Dispatch<React.SetStateAction<Token>>;
};

const defaultClient = {
  firstName: "",
  lastName: "",
  dob: "",
  sex: "",
  contact: 0,
};

const defaultPolicy = {
  category: "",
  policyName: "",
  policyNo: "",
};

export const useClient = () => {
  return useContext(ClientContext);
};

export function ClientProvider({ children }: ClientProviderProps) {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(defaultClient);
  const [clientFormType, setClientFormType] = useState("");

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

  // Policy stuff
  const [policies, setPolicies] = useState([]);
  const [selectedPolicy, setSelectedPolicy] = useState(defaultPolicy);
  const [policyFormType, setPolicyFormType] = useState("");

  const addPolicy = (newPolicy) => {
    setPolicies([...policies, newPolicy]);
    console.log(policies);
  };

  const deletePolicy = (deletedPolicy) => {
    const newPolicyList = policies.filter((policy) => {
      return policy.id !== deletedPolicy.id;
    });
    setPolicies([newPolicyList]);
  };

  const updatePolicy = (updatedPolicy) => {
    const newPolicyList = policies.map((policy) => {
      return policy.id === updatedPolicy.id ? updatedPolicy : policy;
    });
    setPolicies([...policies, newPolicyList]);
  };

  // Login stuff
  const [userToken, setUserToken] = useState<Token>({
    username: undefined,
    loggedInStatus: false,
  });

  return (
    <ClientContext.Provider
      value={{
        addClient,
        deleteClient,
        updateClient,
        selectedClient,
        setSelectedClient,
        clients,
        setClients,
        clientFormType,
        setClientFormType,
        policies,
        setPolicies,
        addPolicy,
        deletePolicy,
        updatePolicy,
        selectedPolicy,
        setSelectedPolicy,
        policyFormType,
        setPolicyFormType,
        userToken,
        setUserToken,
      }}
    >
      {children}
    </ClientContext.Provider>
  );
}
