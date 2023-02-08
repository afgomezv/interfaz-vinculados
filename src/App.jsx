import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Employee } from "./router/Employee";
import { List } from "./router/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/empleado",
    element: <Employee />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
