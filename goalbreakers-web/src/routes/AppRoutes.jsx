import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PageNotFound from "../pages/PageNotFound";
import Copinha from "../pages/Copinha";
import Home from "../pages/Home";
import Teams from "../pages/Teams";
import Games from "../pages/Games";
import Results from "../pages/Results";
import Login from "../pages/Login";

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
        element: <Copinha />,
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
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
