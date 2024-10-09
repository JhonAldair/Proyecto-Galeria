import { Bodas, Home, Infantiles, Maternidad, NewBorn, Seguimiento, Smash } from "./pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/bodas",
    element: <Bodas />,
  },
  {
    path: "/infantiles",
    element: <Infantiles />,
  },
  {
    path: "/maternidad",
    element: <Maternidad />,
  },
  {
    path: "/newBorn",
    element: <NewBorn />,
  },
  {
    path: "/smash",
    element: <Smash />,
  },
  {
    path: "/seguimiento",
    element: <Seguimiento />,
  },
];
