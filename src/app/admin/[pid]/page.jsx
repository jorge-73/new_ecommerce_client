import AdminForm from "@/components/admin/adminForm/AdminForm";
import AdminTable from "@/components/admin/adminTable/AdminTable";
import Navbar from "@/components/navbar/Navbar";

const AdminPagePid = () => {
  return (
    <>
      <Navbar />
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
    </>
  )
}

export default AdminPagePid