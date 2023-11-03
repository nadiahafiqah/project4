import {
  faAmbulance,
  faBaby,
  faBandAid,
  faLifeRing,
  faPiggyBank,
  faShieldAlt,
  faTrashAlt,
  faUserEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeletePolicyModal from "./form/DeletePolicyModal";
import { useClient } from "../context/ClientContext";
import { useState } from "react";

const PolicyCard = (policy) => {
  const { setSelectedPolicy, setPolicyFormType } = useClient();

  const editPolicyForm = () => {
    setSelectedPolicy(policy);
    setPolicyFormType("edit");
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setSelectedPolicy(policy);
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="card w-1/4 bg-lightblue border-solid border-black text-neutral-content m-10">
        <div className="card-body items-center text-center">
          <h2 className="card-title">
            {policy.category === "Hospitalisation" && (
              <FontAwesomeIcon icon={faAmbulance} />
            )}
            {policy.category === "Dependent's Protection Scheme" && (
              <FontAwesomeIcon icon={faBaby} />
            )}
            {policy.category === "Personal Accident" && (
              <FontAwesomeIcon icon={faBandAid} />
            )}
            {policy.category === "Whole Life" && (
              <FontAwesomeIcon icon={faLifeRing} />
            )}
            {policy.category === "Term" && (
              <FontAwesomeIcon icon={faShieldAlt} />
            )}
            {policy.category === "Savings" && (
              <FontAwesomeIcon icon={faPiggyBank} />
            )}
          </h2>
          <h2>{policy.category}</h2>
          <div className="card-actions justify-end">
            {policy.policyName}
            <br />
            Policy No: {policy.policyNo}
          </div>
          <div className="flex">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary btn-sm bg-transparent border-transparent rounded"
              onClick={editPolicyForm}
            >
              <FontAwesomeIcon icon={faUserEdit} />
            </label>
            <label
              htmlFor="delete"
              className="drawer-button btn btn-primary btn-sm bg-transparent border-transparent  rounded"
              onClick={handleToggle}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </label>
            <DeletePolicyModal handleToggle={handleToggle} open={open} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PolicyCard;
