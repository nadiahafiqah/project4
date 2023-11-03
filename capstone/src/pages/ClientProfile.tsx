import ClientDetails from "../components/ClientDetails";
import PolicyCard from "../components/PolicyCard";
import AddPolicyForm from "../components/form/AddPolicyForm";
import EditPolicyForm from "../components/form/EditPolicyForm";
import { useEffect, useRef } from "react";
import axios from "axios";
import { useClient } from "../context/ClientContext";

const ClientProfile = () => {
  const { policies, setPolicies, selectedClient, policyFormType } = useClient();
  const drawerRef = useRef({} as HTMLInputElement);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:15432/policy/${selectedClient.id}`,
      // withCredentials: true,
    })
      .then((response) => {
        setPolicies(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex">
            <h2 className="text-black m-auto my-10">Client's Profile</h2>
          </div>
          <ClientDetails />
          <div className="flex flex-wrap mx-[10%]">
            {policies &&
              policies.map((policy) => {
                return <PolicyCard key={policy.id} {...policy} />;
              })}
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            className="drawer-overlay"
            aria-label="close sidebar"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {policyFormType === "edit" ? (
              <EditPolicyForm closeDrawer={closeDrawer} />
            ) : (
              <AddPolicyForm closeDrawer={closeDrawer} />
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ClientProfile;
