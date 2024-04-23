import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const AdminTable = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="overflow-x-auto">
        <table className="table text-white bg-neutral glass">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Code</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover hover:text-black">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td className="flex justify-center items-center">
                <button className="btn btn-sm btn-error me-1"><FaTrashAlt /></button>
                <button className="btn btn-sm btn-info me-1"><FaRegEdit /></button>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="hover hover:text-black">
              <th>2</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td className="flex justify-center items-center">
                <button className="btn btn-sm btn-error me-1"><FaTrashAlt /></button>
                <button className="btn btn-sm btn-info me-1"><FaRegEdit /></button>
              </td>
            </tr>
            {/* row 3 */}
            <tr className="hover hover:text-black">
              <th>3</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td className="flex justify-center items-center">
                <button className="btn btn-sm btn-error me-1"><FaTrashAlt /></button>
                <button className="btn btn-sm btn-info me-1"><FaRegEdit /></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
