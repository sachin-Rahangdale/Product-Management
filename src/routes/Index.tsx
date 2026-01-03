import { createBrowserRouter, Outlet } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import Layout from "./Layout";
import Products from "../pages/Products";
import EditProduct from "../pages/EditProduct";
const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
       {
        path: "/",
        element: <Products />,
      },
      {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/edit/:id",
        element: <EditProduct />,
      }
    ],
  },
]);

export default router;