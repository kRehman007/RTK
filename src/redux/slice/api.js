import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const TodoAPI = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => "/todos",
    }),
  }),
});

export const { useFetchTodosQuery } = TodoAPI; //Auto-Generated Hook...
