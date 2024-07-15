import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListAltIcon from '@mui/icons-material/ListAlt';

const drawerWidth = 240;

function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <Link to="/admin" style={{ display: "block", textDecoration: "none" }}>
          <ListItem>
            <ListItemButton>
          <DashboardIcon />
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/product/list" style={{ display: "block", textDecoration: "none" }}>
          <ListItem>
            <ListItemButton>
              <ListAltIcon />
              <ListItemText primary={"List Product"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/admin/product/add" style={{ display: "block", textDecoration: "none" }}>
          <ListItem>
            <ListItemButton>
              <AddCircleIcon />
              <ListItemText primary={"Add product"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
}

export default Sidebar;
