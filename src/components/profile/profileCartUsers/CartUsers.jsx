import { useEffect } from "react";
import useUsers from "@/store/UserStore";
import moment from "moment";
import toast from "react-hot-toast";

const CartUsers = ({ user }) => {
  const { changeRole } = useUsers();
  // Calcula la diferencia en horas entre la última conexión y la hora actual
  const lastConnection = moment().diff(moment(user?.last_connection), "hours");

  const handleChangeRole = async (uid) => {
    const res = await changeRole(uid);

    if (res?.error) return toast.error(res?.error);
    toast.success("Change Role Successfully");

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  useEffect(() => {}, [changeRole]);
  

  return (
    <div className="card w-96 bg-neutral glass text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{`${user?.first_name} ${user?.last_name}`}</h2>
        <p>
          <span className="font-bold">UserId:</span> {user?._id}
        </p>
        <p>
          <span className="font-bold">User role:</span> {user?.role}
        </p>
        <p>
          <span className="font-bold">Last Connection:</span>{" "}
          {lastConnection === 0 ? "Recently" : `${lastConnection} hours ago`}
        </p>
        <div className="card-actions justify-end">
          {user?.role === "premium" ? (
            <button
              className="btn btn-warning font-bold"
              onClick={() => handleChangeRole(user?._id)}
            >
              Change Role
            </button>
          ) : (
            <button
              className="btn btn-neutral font-bold"
              onClick={() => handleChangeRole(user?._id)}
            >
              Change Role
            </button>
          )}
          <button className="btn btn-error text-white font-bold">
            Delete user
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartUsers;
