const AddPolicyForm = () => {

    const {  notifySuccess, notifyError } = useClient();
    const formRef = useRef({} as HTMLFormElement);
  
    const [policy, setPolicy] = useState({
      firstName: "",
      lastName: "",
      dob: "",
      sex: "",
      contact: 0,
    });
  
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
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      //console.log("item sent => ", JSON.stringify(item, null, 2));
      let res: Client;
      try {
        axios({
          method: "POST",
          url: `http://localhost:15432/policy`,
          // withCredentials: true,
          data: {
            firstName: client.firstName,
            lastName: client.lastName,
            dob: client.dob,
            sex: client.sex,
            contact: client.contact,
          },
        }).then((response) => {
          console.log(response);
          setTimeout(() => addPolicy(res), 900);
          formRef.current.reset();
          notifySuccess("Client successfully added!");
        });
      } catch (err) {
        console.log(err);
        notifyError();
      }
    };
  
    return (  );
}
 
export default AddPolicyForm;