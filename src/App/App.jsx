import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import 'animate.css';
import './App.css'

import Accueil from '../components/accueil/Accueil';

const App = () => {
  const routes = [
    {
      path: "/accueil",
      element: <Accueil />,
    },
    {
      path: "*",
      element: <Navigate to="/accueil" />,
    },
  ];
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default App
