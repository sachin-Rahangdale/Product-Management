import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import { AddProduct } from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Layout from "./Layout";
import Products from "../pages/Products";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/edit",
        element: <EditProduct />,
      },
      {
        path: "/show",
        element: <Products />,
      }
    ],
  },
]);

export default router;