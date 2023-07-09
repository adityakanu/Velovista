import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ProfileCard from "./components/profileCard.jsx";
import Signup from "./components/signup.jsx";
import "./index.css";
import Chat from "./Pages/chat.jsx";
import Login from "./Pages/home.jsx";
import Map from "./Pages/map.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <ProfileCard />,
    },
    {
        path: "/chat",
        element: <Chat />,
    },
    {
        path: "/map",
        element: <Map />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
