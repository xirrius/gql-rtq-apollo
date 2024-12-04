import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countries from "./Pages/Countries";
import Country from "./Pages/Country";
import "./App.css"
import AddTodo from "./Pages/AddTodo";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Countries />,
    },
    {
      path: "/:id",
      element: <Country />,
    },
    {
      path: "/create",
      element: <AddTodo />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
};
export default App;
