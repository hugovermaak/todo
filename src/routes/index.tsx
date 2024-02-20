import { createBrowserRouter } from "react-router-dom";

import DefaultLayout from "@/layouts/DefaultLayout";
import ErrorView from "@/views/ErrorView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: "/",
        async lazy() {
          const { default: TodoListView } = await import(
            "@/views/TodoListView"
          );
          return { Component: TodoListView };
        },
      },
    ],
  },
]);

export default router;
