import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import Work from "./routes/Work";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "", element: <Home />, index: true },
      {
        path: "works/:slug",
        element: <Work />,
      },
    ],
  },
]);

export default router;
