import React from "react";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[100%] md:w-[60%] p-14 h-[500px] m-auto mt-10"
    >
      <Input
        type="text"
        placeholder="Enter Name"
        {...register("username", {
          required: { value: true, message: "Name is required" },
        })}
      />
      {errors.username && (
        <div style={{ color: "red" }}>{errors.username.message}</div>
      )}

      <Input
        type="email"
        className="mt-5"
        placeholder="Enter Email"
        {...register("email", {
          required: { value: true, message: "Email is required" },
          pattern: {
            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <div style={{ color: "red" }}>{errors.email.message}</div>
      )}

      <Input
        type="password"
        className="mt-5 mb-5"
        placeholder="Enter Password"
        {...register("password", {
          required: { value: true, message: "Password is required" },
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
        })}
      />
      {errors.password && (
        <div style={{ color: "red" }}>{errors.password.message}</div>
      )}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Login"}
      </Button>
    </form>
  );
};

export default Login;
