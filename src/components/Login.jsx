import React from "react";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

const formSchema = z.object({
  username: z.string().min(3).max(50).nonempty("username is required"),
  email: z
    .string()
    .email("invalid email address")
    .nonempty("email is required"),
  password: z
    .string()
    .min(6, "password must be atleast 6 characters")
    .nonempty("password is required"),
});
const Login = () => {
  const navigate = useNavigate();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[90%] md:w-[40%] m-auto mt-20 border p-5"
      >
        <h1 className="text-center text-3xl font-semibold text-red-950 underline underline-offset-8">
          Login Form
        </h1>
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default Login;
