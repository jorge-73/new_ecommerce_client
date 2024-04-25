"use client";
import AdminForm from "@/components/admin/adminForm/AdminForm";
import AdminTable from "@/components/admin/adminTable/AdminTable";
import Navbar from "@/components/navbar/Navbar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const AdminPage = () => {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.push("/login");
    }
  }, [loading, isAuthenticated]);

  return (
    <>
      <Navbar />
      {loading ? (
        <div className=" text-center text-white">
          <span className="loading loading-infinity loading-lg mt-3"></span>
        </div>
      ) : (
        <div className="container mx-auto px-4">
          <div className="lg:flex">
            <div className="lg:w-1/2">
              <AdminForm />
            </div>
            <div className="lg:w-1/2">
              <AdminTable />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPage;
