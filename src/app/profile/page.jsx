"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import { useAuth } from "@/contexts/AuthContext";
import useUsers from "@/store/UserStore";
import { useRouter } from "next/navigation";
import ProfileForm from "@/components/profile/profileForm/ProfileForm";
import CartUsers from "@/components/profile/profileCartUsers/CartUsers";

const ProfilePage = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const { imageUrl, getAllUsers, users } = useUsers();
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Redireccionar al inicio si no hay usuario autenticado
    if (!isAuthenticated && !loading) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, user]);

  useEffect(() => {}, [showForm]);

  useEffect(() => {
    if (user?.role === "admin") {
      getAllUsers();
    }
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="pt-24">
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
                      user?.profilePicture
                        ? `${imageUrl}/profiles/${user?.profilePicture}`
                        : "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    }
                    alt="Profile Picture"
                  />
                </div>
              </div>
              <p className="text-lg font-semibold">Email: {user?.email}</p>
              <p className="text-lg font-semibold">Role: {user?.role}</p>
              <div className="flex justify-center items-center mt-8">
                {user?.role === "user" && (
                    <button
                      className="btn btn-primary mr-4"
                      onClick={() => setShowForm(!showForm)}
                    >
                      Add Files
                    </button>
                )}
              </div>
            </>
          )}
        </div>
        {user?.role === "admin" && (
          <div className="px-5 py-20 lg:px-30 xl:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {users &&
              users.map((user, idx) => <CartUsers key={idx} user={user} />)}
          </div>
        )}
      </div>

      {showForm && <ProfileForm user={user} />}
    </>
  );
};

export default ProfilePage;
