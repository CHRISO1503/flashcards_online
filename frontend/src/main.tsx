import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import CreateDeck from "./routes/createDeck";
import OpenDeck from "./routes/openDeck";
import ManageDecks from "./routes/manageDecks";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/create-deck", element: <CreateDeck /> },
    { path: "/open-deck", element: <OpenDeck /> },
    { path: "/manage-decks", element: <ManageDecks /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
