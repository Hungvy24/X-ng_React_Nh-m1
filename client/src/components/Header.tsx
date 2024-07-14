import { Box, Stack, styled, Typography } from "@mui/material";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const menus = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Shop",
    link: "/shop",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Login",
    link: "/login",
  },{
    label: "Register",
    link: "/register",
  }
];

const Header = () => {
  return (
    <Wrapper
      sx={{ padding: "0 50px" }}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <img src="./logo.svg" alt="logo" width={"100px"} />
      <Stack direction={"row"} gap={"55px"}>
        {/* menu */}
        {menus.map((menu, index) => (
          <Link to={menu.link} key={index} style={{ textDecoration: "none" }}>
            <Typography fontWeight={"500"}>{menu.label}</Typography>
          </Link>
        ))}
      </Stack>
      <Stack gap={"45px"} direction={"row"}>
        {/* icon  */}
        {/* <img src="./user.svg" alt="user" /> */}
        <SearchIcon />
        <FavoriteBorderIcon />
        {/* <img src="./cart.svg" alt="cart" /> */}
      </Stack>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Stack)({
  height: 100,
  padding: "0 50px",
  textDecoration: "none",
});
