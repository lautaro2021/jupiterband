import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import Cards from "./routes/Cards";
import Devices from "./routes/Devices";
import Profile from "./routes/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/tarjetas",
        element: <Cards />,
      },
      {
        path: "/dispositivos",
        element: <Devices />,
      },
      {
        path: "/perfil",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
