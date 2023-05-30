import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar";
import Footer from "../../Pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-56px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
