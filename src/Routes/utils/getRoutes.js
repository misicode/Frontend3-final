import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import Home from "../Home";
import Detail from "../Detail";
import Favs from "../Favs";
import Contact from "../Contact";

export const getRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dentist/:id",
        element: <Detail />,
      },
      {
        path: "/favs",
        element: <Favs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);