import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "./redux/store/store";
import { login, logout, User } from "./redux/reducers/authSlice.slice";
import Root from "./routes/Root";
import Home from "./routes/Home";
import MyCards from "./routes/MyCards";
import Devices from "./routes/Devices";
import Profile from "./routes/Profile";
import Transactions from "./routes/Transactions";
import RechargeBalance from "./routes/RechargeBalance";
import PersonalInformation from "./routes/ProfileOptions/PersonalInformation";

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
            {
                path: "/perfil/datos-personales",
                element: <PersonalInformation />,
            },
        ],
    },
]);

function App() {
    const { user, isAuthenticated } = useAuth0();
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        if (isAuthenticated && user) {
            dispatch(login(user as User));
        } else if (!isAuthenticated) {
            dispatch(logout());
        }
        //eslint-disable-next-line
    }, [isAuthenticated]);

    return <RouterProvider router={router} />;
}

export default App;
