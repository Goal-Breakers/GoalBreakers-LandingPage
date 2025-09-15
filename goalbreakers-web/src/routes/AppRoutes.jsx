import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../pages/App";
import PageNotFound from "../pages/PageNotFound";
import Copinha from "../pages/Copinha";
import Home from "../pages/Home";
import Teams from "../pages/Teams";
import Games from "../pages/Games";
import Results from "../pages/Results";
import Login from "../pages/Login";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { user, isAdmin } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (!isAdmin()) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "copinha",
                element: <Copinha/>
            },
            {
                path: "teams",
                element: <Teams/>
            },
            {
                path: "games",
                element: <Games/>
            },
            {
                path: "results",
                element: <Results/>
            },
            {
                path: "login",
                element: <Login/>
            }
        ]
    },

])
