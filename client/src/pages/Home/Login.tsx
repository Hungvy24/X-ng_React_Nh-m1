import { Label } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, Stack, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import axios from "axios";
import { ValidationErrors } from "final-form";
import { Field, Form } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import { InputText } from "src/components/element/InputText";
import { useGlobalContext } from "src/context";
import { MIN_PASSWORD } from "src/conts";
import isEmail from "validator/lib/isEmail";

type LoginFormParams = {
  email: string;
  password: string;
};

const Login = () => {
  const naigate = useNavigate();
  const { setFlash } = useGlobalContext();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const validate = (values: LoginFormParams) => {
    const { email, password } = values;
    const errors: ValidationErrors = {};
    if (!email) errors.email = "Can nhap email vao";
    if (email && !isEmail(email)) errors.email = "Chua dung dinh dang email";
    if (!password) errors.password = "Can nhap password vao";
    if (password && password.length < MIN_PASSWORD)
      errors.password = `Can nhap password toi thieu ${MIN_PASSWORD} ky tu`;
    return errors;
  };

  const onSubmit = async (values: LoginFormParams) => {
    try {
      const { data } = await axios.post("/auth/login", values);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user)); // luu object
      setFlash((state: any) => ({
        ...state,
        isShow: true,
        type: "success",
        content: "Đăng nhập thành công",
      }));
      naigate("/");
    } catch (error) {
      setFlash((state: any) => ({
        ...state,
        isShow: true,
        type: "error",
        content: "Tài khoản hoặc mật khẩu không chính xác",
      }));
    }
  };

  return (
    <Container sx={{ height: "100vh", padding: "20px" }}>
      <Stack
        maxWidth="sm"
        sx={{
          padding: 2,
          margin: "auto",
          border: "1px solid #ccc",
          borderRadius: 5,
          display: "flex",
          flexDirection: "column",
          // gap: 2,
          // width: "40%",
        }}
      >
        <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>

        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        />
        </Box>
        <Typography variant="h5" textAlign={"center"} mb={2}>
          Login
        </Typography>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ values }) => {
            return (
              <Stack gap={2}>
                <Field
                  name="email"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Email"}
                      messageError={meta.touched && meta.error}
                    />
                  )}
                />
                <Field
                  name="password"
                  render={({ input, meta }) => (
                    <InputText
                      input={input}
                      label={"Password"}
                      messageError={meta.touched && meta.error}
                      type="password"
                    />
                  )}
                />
                <Button variant="contained" onClick={() => onSubmit(values)}>
                  Submit
                </Button>
                  <Box sx={{ textAlign: "center", justifyContent: 'space-between', display: 'flex', textDecoration: 'none' }}>
                <Link to="/forgot-password" >Forgot password?</Link>
                <Link to="/register" >
                Don't have an account? Sign Up</Link>
                </Box>
              </Stack>
            );
          }}
        />
      </Stack>
    </Container>
  );
};

export default Login;
