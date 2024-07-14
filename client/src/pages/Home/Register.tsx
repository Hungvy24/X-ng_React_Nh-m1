import { Message } from "@mui/icons-material";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

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
    try {
      await axios.post("http://localhost:3000/register", data);
    } catch (error) {}
  };
  return (
    <Container>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Register
      </Typography>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextField
            label="name"
            {...register("username", { required: "User is required" })}
          />
          error = {!!errors?.username?.message}
          helperText= {errors?.username?.message}
          <TextField
            label="email"
            {...register("email", { required: "Email is required" })}
          />
          error = {!!errors?.email?.message}
          helperText= {errors?.email?.message}
          <TextField
            label="password"
            {...register("password", { required: "Password is required" })}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default Register;
