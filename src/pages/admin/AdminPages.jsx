import NavbarAdmin from "../../components/admin/dashboard/navbar/NavbarAdmin";
import Sidebar from "../../components/admin/sidebar/Sidebar";

const AdminPages = () => {
  return (
    <div>
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <div className="">
          <NavbarAdmin />
        </div>
      </div>
    </div>
  );
};

export default AdminPages;
