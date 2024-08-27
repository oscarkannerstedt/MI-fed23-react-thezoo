import { createBrowserRouter } from "react-router-dom";
import { Animal } from "./pages/Animal";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <NotFound></NotFound>,
        children: [{
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/animals",
            element: <Animals></Animals>
        },
        {
            path: "/animal/:id",
            element: <Animal></Animal>
        }],
    },
]);