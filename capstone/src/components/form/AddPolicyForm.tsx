import axios from "axios";
import { useState, useRef } from "react";
import { useClient } from "../../context/ClientContext";
import {
  DateInput,
  NumberInput,
  SelectCategory,
  TextAreaInput,
  TextInput,
} from "./FormComponents";

const AddPolicyForm = () => {
  const { addPolicy, selectedClient } = useClient();
  const formRef = useRef({} as HTMLFormElement);
  const drawerRef = useRef({} as HTMLInputElement);

  const [policy, setPolicy] = useState({
    category: "",
    policyName: "",
    policyNo: "",
  });

  const fieldItems = [
    {
      type: "select",
      label: "Category",
      name: "category",
      value: policy.category,
      required: true,
    },
    {
      type: "text-input",
      label: "Policy Name",
      name: "policyName",
      value: policy.policyName,
      required: true,
    },
    // {
    //   type: "text-area",
    //   label: "Coverage",
    //   name: "coverage",
    //   value: policy.coverage,
    //   required: true,
    // },
    // {
    //   type: "text-input",
    //   label: "Life Assured",
    //   name: "lifeAssured",
    //   value: policy.lifeAssured,
    //   required: true,
    // },
    {
      type: "text-input",
      label: "Policy Number",
      name: "policyNo",
      value: policy.policyNo,
      required: true,
    },
    // {
    //   type: "number",
    //   label: "Premium",
    //   name: "premium",
    //   value: policy.premium,
    //   required: true,
    // },
    // {
    //   type: "date",
    //   label: "Next Payment",
    //   name: "nextPayment",
    //   value: policy.nextPayment,
    //   required: true,
    // },
    // {
    //   type: "date",
    //   label: "Commencement",
    //   name: "commencement",
    //   value: policy.commencement,
    //   required: true,
    // },
    // {
    //   type: "date",
    //   label: "Expiry",
    //   name: "expiry",
    //   value: policy.expiry,
    //   required: true,
    // },
  ];

  const handleInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPolicy((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //console.log("item sent => ", JSON.stringify(item, null, 2));
    try {
      axios({
        method: "POST",
        url: `http://localhost:15432/policy/${selectedClient.id}`,
        withCredentials: true,
        data: {
          category: policy.category,
          policyName: policy.policyName,
          policyNo: policy.policyNo,
          // nextPayment: policy.nextPayment,
          // commencement: policy.commencement,
          // expiry: policy.expiry,
          // premium: policy.premium,
          // lifeAssured: policy.lifeAssured,
          // coverage: policy.coverage,
          // paymentPeriod: policy.paymentPeriod,
        },
      }).then((response) => {
        console.log(response);
        addPolicy(response.data);
        formRef.current.reset();
        // notifySuccess("Client successfully added!");
      });
    } catch (err) {
      console.log(err);
      // notifyError();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="flex-col">
          <h3 className="text-orange py-4">Add new policy</h3>
          {fieldItems.map((policy, index) => {
            if (policy.type === "select") {
              return (
                <SelectCategory
                  key={index}
                  label={policy.label}
                  name={policy.name}
                  handleInput={handleInput}
                  required={policy.required}
                />
              );
            } else if (policy.type === "text-input") {
              return (
                <TextInput
                  key={index}
                  label={policy.label}
                  name={policy.name}
                  handleInput={handleInput}
                  required={policy.required}
                />
              );
            } else if (policy.type === "number") {
              return (
                <NumberInput
                  key={index}
                  label={policy.label}
                  name={policy.name}
                  handleInput={handleInput}
                  required={policy.required}
                />
              );
            } else if (policy.type === "date") {
              return (
                <DateInput
                  key={index}
                  label={policy.label}
                  name={policy.name}
                  handleInput={handleInput}
                  required={policy.required}
                />
              );
            } else if (policy.type === "text-area") {
              return (
                <TextAreaInput
                  key={index}
                  label={policy.label}
                  name={policy.name}
                  handleInput={handleInput}
                  required={policy.required}
                />
              );
            }
          })}
          <div className="wrapper flex flex-row-reverse">
            <input
              type="submit"
              className="btn btn-primary btn-sm mt-4 hover:bg-orange hover:text-white"
              value="Add Policy"
              onClick={() => closeDrawer}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default AddPolicyForm;
