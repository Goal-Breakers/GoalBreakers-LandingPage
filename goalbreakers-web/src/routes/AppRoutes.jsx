import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import PageNotFound from "../pages/PageNotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <PageNotFound/>
    }
])