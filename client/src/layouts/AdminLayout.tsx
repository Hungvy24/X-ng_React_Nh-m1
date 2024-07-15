import { Stack } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "src/components/Sidebar";

function AdminLayout() {

  const nav = useNavigate();


  const user = localStorage.getItem('user');

  if (!user) {
    nav("/login")
  }

  return (
    <>
      <Stack direction={"row"} gap={2}>
        <Sidebar />
        <Outlet />
      </Stack>
    </>
  );
}

export default AdminLayout;
