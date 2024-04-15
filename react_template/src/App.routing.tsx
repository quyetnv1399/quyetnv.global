import { RouteObject, useRoutes } from "react-router-dom";
import { LayoutView } from "./layout/Layout.view";
import LayoutRoutes from "./layout/Layout.routing";

const routes: RouteObject[] = [
  {
    path: `${process.env.PUBLIC_URL}`,
    element: <LayoutView />,
    children: [LayoutRoutes],
  },
  // {
  //   path: `public`,
  //   element: <Public />,
  //   children: [{ index: true, element: <Login /> }, LayoutRoutes],
  // },
];

const AppRoutes = () => {

  const element = useRoutes(routes);
  return element;
};

export default AppRoutes;
