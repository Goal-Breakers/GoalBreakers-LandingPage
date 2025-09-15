import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PageNotFound from "../pages/PageNotFound";
import Copinha from "../pages/Copinha";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound/>,
    },
    {
        path: "/copinha",
        element: <Copinha/>,
        errorElement: <PageNotFound/>,
    }
])