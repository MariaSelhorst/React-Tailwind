import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from '../src/Pages/Home'
import Contato from '../src/Pages/Contato'
import Produto from '../src/Pages/Produto'
import Sobre from '../src/Pages/Sobre'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "contato",
    element: <Contato/>,
  },
  {
    path: "produto",
    element: <Produto/>,
  },
  {
    path: "sobre",
    element: <Sobre/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);