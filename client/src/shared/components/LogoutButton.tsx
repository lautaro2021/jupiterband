import { useAuth0 } from "@auth0/auth0-react";
import { TYPOGRAPHIES } from "../theme/theme";

function LogoutButton() {
    const { logout } = useAuth0();

    return (
        <span
            onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
            style={TYPOGRAPHIES.span}
        >
            Cerrar sesión
        </span>
    );
}

export default LogoutButton;
