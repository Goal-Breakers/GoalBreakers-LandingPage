import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PageNotFound from "../pages/PageNotFound";
import Copinha from "../pages/Copinha";
import Home from "../pages/Home";
import Teams from "../pages/Teams";
import Games from "../pages/Games";
import Results from "../pages/Results";

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
            }
        ]
    },

])
