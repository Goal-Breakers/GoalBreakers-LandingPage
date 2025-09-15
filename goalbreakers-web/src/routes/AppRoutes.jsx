import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PageNotFound from "../pages/PageNotFound";
import Copinha from "../pages/Copinha";
import Home from "../pages/Home";

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
            }
        ]
    },

])