import { Message } from "@mui/icons-material";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormRegister = {
  username: string;
  email: string;
  password: string;
};
const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>();

  const onSubmit: SubmitHandler<FormRegister> = async (data) => {
    console.log(data);
    const navigate = useNavigate();

    try {
      await axios.post("http://localhost:3000/register", data);
      alert("Đăng ký thành công");
      navigate("/login");
    } catch (error) {
      navigate("/not-found");
    }
  };
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Register
      </Typography>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Stack gap={2}>
          <TextField
            label="name"
            {...register("username", { required: "User is required" })}
          />
          <div> {errors?.username?.message}</div>
          <TextField
            label="email"
            {...register("email", { required: "Email is required" })}
          />
          <div>{errors?.email?.message}</div>

          <TextField
            label="password"
            {...register("password", { required: "Password is required" })}
          />
          <div>{errors?.password?.message}</div>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;
