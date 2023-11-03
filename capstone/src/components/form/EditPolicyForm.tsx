import { useClient } from "../../context/ClientContext";
import { useEffect, useRef } from "react";
import axios from "axios";
import {
  DateInput,
  NumberInput,
  SelectCategory,
  TextAreaInput,
  TextInput,
} from "./FormComponents";

const EditPolicyForm = ({ closeDrawer }: { closeDrawer: () => void }) => {
  const { updatePolicy, selectedPolicy, setSelectedPolicy } = useClient();
  const formRef = useRef({} as HTMLFormElement);

  const fieldItems = [
    {
      type: "select",
      label: "Category",
      name: "category",
      value: selectedPolicy.category,
      required: true,
    },
    {
      type: "text-input",
      label: "Policy Name",
      name: "policyName",
      value: selectedPolicy.policyName,
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
      value: selectedPolicy.policyNo,
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
    setSelectedPolicy((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    selectedPolicy.id;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPolicy.id]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      axios({
        method: "PUT",
        url: `http://localhost:15432/policy/${selectedPolicy.id}`,
        // withCredentials: true,
        data: {
          category: selectedPolicy.category,
          policyName: selectedPolicy.policyName,
          policyNo: selectedPolicy.policyNo,
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
        updatePolicy(response.data);
        formRef.current.reset();
      });
    } catch (err) {
      console.log(err);
    }
    closeDrawer && closeDrawer();
  };

  return (
    <>
      <form onSubmit={handleSubmit} ref={formRef}>
        <div className="flex-col">
          <h3 className="text-orange py-4">Edit policy</h3>
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
          <label
            htmlFor="my-drawer-4"
            className="btn btn-primary btn-sm float-right mt-[10px] mr-[6px]drawer-button hover:bg-orange hover:text-white"
            onClick={() => closeDrawer}
          >
            Cancel
          </label>

          <button
            className="btn btn-primary btn-sm float-right mt-[10px] mr-[6px] hover:bg-orange hover:text-white"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditPolicyForm;
