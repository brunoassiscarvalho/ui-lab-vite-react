import { createBrowserRouter } from "react-router";
import Feature1 from "./features/feature1/Feature1";
import Feature2 from "./features/feature2/Feature2";
import Feature1CardGrid from "./features/feature1/Feature1CardGrid";
import Feature1Detail from "./features/feature1/Feature1Detail";
import Feature2ListPage from "./features/feature2/Feature2ListPage";
import Feature2ThreeColumnPage from "./features/feature2/Feature2ThreeCollumn";
import { HomePage } from "./features/home/HomePage";
import Dashboard from "./features/home/Dashboard";

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "feature1",
        Component: Feature1,
        children: [
          {
            index: true,
            Component: Feature1CardGrid,
          },
          {
            path: ":cardId",
            Component: Feature1Detail,
          },
        ],
      },
      {
        path: "feature2",
        Component: Feature2,
        children: [
          {
            index: true,
            Component: Feature2ListPage,
          },
          {
            path: ":cardId",
            Component: Feature2ThreeColumnPage,
          },
        ],
      },
    ],
  },
]);
