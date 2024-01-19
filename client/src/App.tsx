import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import MyCards from "./routes/MyCards";
import Devices from "./routes/Devices";
import Profile from "./routes/Profile";
import Transactions from "./routes/Transactions";
import RechargeBalance from "./routes/RechargeBalance";

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
        element: <MyCards />,
      },
      {
        path: "/dispositivos",
        element: <Devices />,
      },
      {
        path: "/perfil",
        element: <Profile />,
      },
      {
        path: "/transacciones",
        element: <Transactions />,
      },
      {
        path: "/recargar-saldo",
        element: <RechargeBalance />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
