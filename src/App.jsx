//Context
import { FormProvider } from "./contexts/FormContext";

//React-Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Rutas
import { Employee } from "./router/Employee";
import { List } from "./router/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
    errorElement: <h1>No Found Page</h1>,
  },
  {
    path: "/empleado",
    element: <Employee />,
  },
]);

const App = () => {
  return (
    <FormProvider>
      <RouterProvider router={router} />;
    </FormProvider>
  );
};

export default App;
