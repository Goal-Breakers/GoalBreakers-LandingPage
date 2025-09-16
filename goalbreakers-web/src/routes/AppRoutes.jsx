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
import SobreNos from "../pages/sobreNos";
import ProtectedRoute from "./ProtectedRoute";
import BancoDeTalentos from "../pages/BancoTalentos";
import JogadoraPerfil from "../pages/JogadoraPerfil";
import ErrorBoundary from "../components/ErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        element: (
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        ),
      },
      {
        path: "copinha",
        element: (
          <ErrorBoundary>
            <CopinhaLayout />
          </ErrorBoundary>
        ),
        children: [
          {
            index: true,
            element: (
              <ErrorBoundary>
                <ProtectedRoute>
                  {" "}
                  <Copinha />{" "}
                </ProtectedRoute>
              </ErrorBoundary>
            ),
          },
          {
            path: "times",
            element: (
              <ErrorBoundary>
                <Teams />
              </ErrorBoundary>
            ),
          },
          {
            path: "jogos",
            element: (
              <ErrorBoundary>
                <Games />
              </ErrorBoundary>
            ),
          },
          {
            path: "resultados",
            element: (
              <ErrorBoundary>
                <Results />
              </ErrorBoundary>
            ),
          },
        ],
      },
      {
        path: "banco-talentos",
        element: (
          <ErrorBoundary>
            <BancoDeTalentos />
          </ErrorBoundary>
        ),
      },
      {
        path: "jogadora",
        element: (
          <ErrorBoundary>
            <JogadoraPerfil />
          </ErrorBoundary>
        ),
      },
      {
        path: "sobreNos",
        element: (
          <ErrorBoundary>
            <SobreNos />
          </ErrorBoundary>
        ),
      },
      {
        path: "login",
        element: (
          <ErrorBoundary>
            <Login />
          </ErrorBoundary>
        ),
      },
    ],
  },
]);
