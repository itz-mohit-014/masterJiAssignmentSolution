import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from "./components/AppLayout.jsx";
import OtpForm from "./components/otp-form/OtpForm.jsx";
import Batches from "./components/batches/Batches.jsx";
import CourseList from "./components/course-list/CourseList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/otp-form"} replace />,
      },
      {
        path: "/otp-form",
        element: <OtpForm theme={{ bg: "#4b71aa", text: "#FFFFFF" }} />,
      },
      {
        path: "/batches",
        element: <Batches theme={{ bg: "#E2BBE9", text: "#444B79" }} />,
      },
      {
        path: "/course-list",
        element: <CourseList theme={{ bg: "#d5e2ca", text: "#4F6F52" }} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AppLayout />
    </RouterProvider>
  </React.StrictMode>
);

