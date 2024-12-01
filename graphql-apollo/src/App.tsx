import "./App.css";
import Home from "./Pages/Home";
import Character from "./Pages/Character";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Search from "./Pages/Search";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Character />,
    },
    {
      path: "/search",
      element: <Search />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
