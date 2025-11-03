import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, setRedirectPath, setIsLoginModalOpen } = useAuth();
  const location = useLocation();
  if (!user) {
    setRedirectPath(location.pathname);
    setIsLoginModalOpen(true);
    return <Navigate to="/" replace />;
  }
  return children;
}
