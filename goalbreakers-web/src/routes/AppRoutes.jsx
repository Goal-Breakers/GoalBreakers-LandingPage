import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PageNotFound from "../pages/PageNotFound";
import Copinha from "../pages/Copinha";
import Home from "../pages/Home";
import Teams from "../pages/Teams";
import Games from "../pages/Games";
import Results from "../pages/Results";
import Login from "../pages/Login";
import CopinhaLayout from "../pages/CopinhaLayout";
import ProtectedRoute from "./ProtectedRoute";
import BancoDeTalentos from "../pages/BancoTalentos";
import JogadoraPerfil from "../pages/JogadoraPerfil";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "copinha",
        element: <CopinhaLayout />,
        children: [
          {
            index: true,
            element: <ProtectedRoute> <Copinha/> </ProtectedRoute>
          },
          {
            path: "times",
            element: <Teams />,
          },
          {
            path: "jogos",
            element: <Games />,
          },
          {
            path: "resultados",
            element: <Results />,
          }
        ]
      },
      {
        path: "banco-talentos",
        element: <BancoDeTalentos/>
      },
      {
        path: "jogadora",
        element: <JogadoraPerfil/>
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
