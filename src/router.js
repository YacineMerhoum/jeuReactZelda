import * as React from "react";

import { createBrowserRouter } from "react-router-dom";


import Game from './Components/Game';
import Victory from './Components/Victory'; 
import Opening from "./Components/Opening";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Game />,
  },
  {
    path: "/victory",
    element: <Victory />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blogs />
  }
]);

export default router;


