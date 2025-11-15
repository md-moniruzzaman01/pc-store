import { createBrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import { homeRoutes } from "./Routes/Home";
import { ProductRoutes } from "./Routes/Product";
import NotFound from "./NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [...homeRoutes, ...ProductRoutes],
  },
  {
    path: "*", // Catch-all route
    element: <NotFound />,
  },
]);
