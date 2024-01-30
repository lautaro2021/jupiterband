import { useAuth0 } from "@auth0/auth0-react";
import { SignIn } from "@phosphor-icons/react";
import styled from "styled-components";
import { TYPOGRAPHIES, PALETTE } from "../theme/theme";

function LoginButton() {
    const { loginWithRedirect } = useAuth0();

    return (
        <StyledLoginButton onClick={() => loginWithRedirect()}>
            <span style={TYPOGRAPHIES.button}>Login</span>
            <SignIn size={20} />
        </StyledLoginButton>
    );
}

const StyledLoginButton = styled.button`
    height: 38px;
    background-color: ${PALETTE.aquamarine};
    border-radius: 8px;
    border: none;
    padding: 0px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: ${PALETTE.neutralBlack};
`;

export default LoginButton;
