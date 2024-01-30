import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./redux/store/store.ts";
import { Provider } from "react-redux";
import "./index.css";

const isProduction = import.meta.env.PRODUCTION === "true";

const AUTH0_DOMAIN = !isProduction
    ? import.meta.env.VITE_AUTH0_DOMAIN
    : import.meta.env.VITE_AUTH0_DOMAIN_PROD;
const AUTH0_CLIENT_ID = !isProduction
    ? import.meta.env.VITE_AUTH0_CLIENT_ID
    : import.meta.env.VITE_AUTH0_CLIENT_ID_PROD;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Auth0Provider
                domain={AUTH0_DOMAIN}
                clientId={AUTH0_CLIENT_ID}
                authorizationParams={{
                    audience: `https://${AUTH0_DOMAIN}/api/v2/`,
                    redirect_uri: window.location.origin,
                }}
            >
                <App />
            </Auth0Provider>
        </Provider>
    </React.StrictMode>
);
