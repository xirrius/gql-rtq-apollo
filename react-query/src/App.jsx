import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { MainLayout } from "./component/Layout/MainLayout.jsx";
import { Home } from "./pages/Home.jsx";
import { FetchOld } from "./pages/FetchOld.jsx";
import { FetchRQ } from "./pages/FetchRQ.jsx";

import "./App.css";
import { FetchIndv } from "./component/UI/FetchIndv.jsx";
import { InfiniteScroll } from "./pages/InfiniteScroll.jsx";

// Create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchIndv />,
      },
      {
        path: "/infinite",
        element: <InfiniteScroll />,
      },
    ],
  },
  
]);

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
     </QueryClientProvider>
  );
}; 

export default App;
