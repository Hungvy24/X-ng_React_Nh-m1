import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminProductList from "./pages/admin/product/List";
import AdminProductAdd from "./pages/admin/product/Add";
import AdminProductEdit from "./pages/admin/product/Edit";
import Homepage from "./pages/Home/Homepage";
import ProductDetail from "./pages/Home/ProductDetail";
import HomeLayout from "./layouts/HomeLayout";
import Register from "./pages/Home/Register";
import Notfound from "./components/Notfound";
import Login from "./pages/Home/Login";

const routeConfig = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "product/list",
        element: <AdminProductList />,
      },
      {
        path: "product/add",
        element: <AdminProductAdd />,
      },
      {
        path: "product/edit/:id",
        element: <AdminProductEdit />,
      },
    ],
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "not-found",
        element: <Notfound />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);

  return <main>{routes}</main>;
}

export default App;
