import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop/OurShop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/shop/:category",
        element: <OurShop />,
      },
      {
        path: "/shop",
        element: <OurShop />,
      },
    ],
  },
]);

export default router;
