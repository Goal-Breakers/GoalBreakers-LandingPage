import "../css/App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";
import { Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function App() {
  const { isLoginModalOpen, setIsLoginModalOpen } = useAuth();

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer />
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
}

export default App;
