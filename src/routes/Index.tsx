import { createBrowserRouter, Outlet } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import Layout from "./Layout";
import Products from "../pages/Products";
import EditProduct from "../pages/EditProduct";
import RequiredAuth from "./RequiredAuth";
import LoginPage from "../pages/LoginPage";
const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
       {
        path: "/",
        element: <Products />,
      },
      {
        path: "/login",
        element: <LoginPage/>,
      },
      {
        element: <RequiredAuth/>,
        children: [
          {
        path: "/add",
        element: <AddProduct />,
      },
      {
        path: "/edit/:id",
        element: <EditProduct />,
      }
        ]
      }
    ],
  },
]);

export default router;