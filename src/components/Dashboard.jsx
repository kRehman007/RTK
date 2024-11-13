import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "@/redux/slice/todos";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  console.log("State", state);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className=" p-20">
      {state.todo.data?.map((data) => (
        <Card className="mt-3">
          <CardHeader>
            <CardTitle>{data.id}</CardTitle>
            <CardDescription>{data.title}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{data.completed}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
