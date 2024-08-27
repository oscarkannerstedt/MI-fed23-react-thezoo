import { createBrowserRouter } from "react-router-dom";
import { Animal } from "./pages/Animal";
import { Animals } from "./pages/Animals";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
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