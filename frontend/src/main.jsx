import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./components/jsx/Homepage";
import Login from "./components/jsx/Login";
import Register from "./components/jsx/Register";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: (
      <>
        <div>
          <h1>404 Error, page not found</h1>
          <br />
          <a href="/"><h1>Homepage</h1></a>
        </div>
      </>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
