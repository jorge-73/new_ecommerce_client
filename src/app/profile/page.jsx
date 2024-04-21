"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import useUsers from "@/store/UserStore";
import { useRouter } from "next/navigation";
import ProfileForm from "@/components/profileForm/ProfileForm";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const { imageUrl, changeRole, errors } = useUsers();
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Redireccionar al inicio si no hay usuario autenticado
    if (!isAuthenticated && !loading) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, user]);

  useEffect(() => {}, [showForm]);

  const handleChangeRole = async (uid) => {
    await changeRole(uid);

    if (errors.error) return toast.error(errors.error);
    toast.success("Change Role Successfully");
  }

  return (
    <>
      <Navbar />
      <div className=" py-12">
        <div className="max-w-3xl mx-auto bg-white p-6 shadow rounded-lg text-center">
          <h1 className="text-3xl font-bold text-center mb-8">
            {user?.full_name}
          </h1>
          {loading ? (
            <div className=" text-center">
              <span className="loading loading-infinity loading-lg mt-3"></span>
            </div>
          ) : (
            <>
              <div className="avatar mb-3">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      `${imageUrl}/profiles/${user?.profilePicture}` ||
                      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                    alt="Profile Picture"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold">Email: {user?.email}</p>
              <p className="text-lg font-semibold">Role: {user?.role}</p>
              <div className="flex justify-around items-center mt-8">
                <button
                  className="btn btn-neutral mr-4"
                  onClick={() => handleChangeRole(user?.id)}
                >
                  Change Role
                </button>
                <button
                  className="btn btn-primary mr-4"
                  onClick={() => setShowForm(!showForm)}
                >
                  Add Profile Picture
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {showForm && <ProfileForm user={user} />}
    </>
  );
};

export default ProfilePage;
