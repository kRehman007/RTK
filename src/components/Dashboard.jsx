import React, { useEffect } from "react";

import { useFetchTodosQuery } from "@/redux/slice/api";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const { isLoading, data, isError } = useFetchTodosQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    console.log("Error fetching Todos");
  }

  return (
    <div className="p-10">
      {data?.map((data) => (
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
