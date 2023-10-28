import { useClient } from "../context/ClientContext";
import Client from "./Client";

const ClientsTable = () => {
  const { clients } = useClient();

  const handleClick = () => {};

  return (
    <>
      <div className="overflow-x-auto w-[80%] m-auto">
        <table className="table text-black">
          {/* head */}
          <thead className="text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Sex</th>
              <th>Date of Birth</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {clients &&
              clients.map((client) => {
                return <Client key={client.id} {...client} />;
              })}

            {/* row 1 */}
            <tr className="hover:bg-darkblue hover:text-orange">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>Blue</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ClientsTable;
