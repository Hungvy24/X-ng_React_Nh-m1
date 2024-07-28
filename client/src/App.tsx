import { useRoutes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import AdminProductList from "./pages/admin/product/List";
import AdminProductAdd from "./pages/admin/product/Add";
import AdminProductEdit from "./pages/admin/product/Edit";
import Homepage from "./pages/Home/Homepage";
import ProductDetail from "./pages/Home/ProductDetail";
import HomeLayout from "./layouts/HomeLayout";
import Register from "./pages/Home/Register";
import Login from "./pages/Home/Login";
import NotFound from "./components/Notfound";
import { GlobalContext } from "./context";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Flash from "./components/Flash";
import Products from "./pages/Home/Products";
<<<<<<< HEAD
import Loading from "./components/Loading";
=======
>>>>>>> 30f7436980ffc62d67e8406c6ab0c9f5424947c6

const routeConfig = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: (
          <Typography variant="h3" textAlign={"center"} mt={"50px"}>
            Dashboard
          </Typography>
        ),
      },
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
      {
        path: "NotFound",
        element: <NotFound />,
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
        path: "/products",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products",
        element: <Products />,
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
        path: "NotFound",
        element: <NotFound />,
      },
    ],
  },
];

function App() {
  const routes = useRoutes(routeConfig);
  const [loading, setLoading] = useState<boolean>(false);
  const [flash, setFlash] = useState<any>({
    isShow: false,
    type: "",
    content: "",
  });

  return (
    <GlobalContext.Provider value={{ loading, setLoading, setFlash }}>
      <Box>{routes}</Box>
      <Flash isCheck={flash} setFlash={setFlash} />
      {loading && <Loading />}
    </GlobalContext.Provider>
  );
}

export default App;
