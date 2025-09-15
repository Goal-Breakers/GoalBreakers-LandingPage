import "../css/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function CopinhaLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default CopinhaLayout;
