import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
<<<<<<< HEAD
    
=======
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>
>>>>>>> 1eeae857c7bad2a1f67a2cc3708f35d658093322
      <Outlet />
    </div>
  );
};

export default MainLayout;
