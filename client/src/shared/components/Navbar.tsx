import { CustomLink } from "./styled/CustomLink";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
    selectIsAuthenticated,
    selectUser,
} from "../../redux/reducers/authSlice.slice";
import LoginButton from "./LoginButton";
import ProfileImage from "./skeletons/ProfileImage.skeleton";

function Navbar() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);

    return (
        <StyledNavbar>
            <ul>
                <li>
                    <CustomLink flexdirection="row" to={"/"}>
                        <svg
                            width="36"
                            height="36"
                            viewBox="0 0 36 36"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="Group 10">
                                <path
                                    id="Vector"
                                    d="M17.928 10.6357L18.3769 12.4416C18.9847 14.87 20.8258 16.7773 23.19 17.4215L25.0453 17.9281L23.5469 18.2502C20.9425 18.8112 18.8928 20.874 18.3026 23.5304L17.928 25.2169L17.2354 22.8681C16.5675 20.6062 14.7723 18.8799 12.5247 18.3371L10.8073 17.9245L12.7368 17.3889C15.108 16.7338 16.9421 14.8049 17.5181 12.3584L17.9245 10.6357L17.928 10.6357Z"
                                    fill="#38D7C0"
                                />
                                <path
                                    id="Vector_2"
                                    d="M26.9288 0H9.07119C4.06214 0 0 4.06214 0 9.07119V26.9288C0 31.9396 4.06214 36 9.07119 36H26.9288C31.9396 36 36 31.9396 36 26.9288V9.07119C36 4.06214 31.9396 0 26.9288 0ZM26.1191 25.8224C18.657 33.5521 9.01458 36.3465 4.58191 32.0682C0.150958 27.7882 2.60745 18.0532 10.0696 10.3252C17.5334 2.59716 27.1758 -0.19899 31.6068 4.08101C36.0395 8.35929 33.5812 18.0943 26.1191 25.8224Z"
                                    fill="#38D7C0"
                                />
                            </g>
                        </svg>
                    </CustomLink>
                </li>
                <li>
                    {isAuthenticated ? (
                        <CustomLink flexdirection="row" to={"/perfil"}>
                            {user ? (
                                <img
                                    src={user?.picture}
                                    alt={user?.nickname}
                                    title={`${user?.nickname}-profile`}
                                />
                            ) : (
                                <ProfileImage size="sm" />
                            )}
                        </CustomLink>
                    ) : (
                        <LoginButton />
                    )}
                </li>
            </ul>
        </StyledNavbar>
    );
}

const StyledNavbar = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: transparent;
    height: 70px;
    backdrop-filter: blur(7.5px);
    -webkit-backdrop-filter: blur(7.5px);
    z-index: 1000;

    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 15px;

        li {
            list-style: none;
            display: flex;

            img {
                width: 38px;
                height: 38px;
                border-radius: 100%;
                object-fit: cover;
            }

            svg {
                align-self: center;
            }
        }
    }
`;

export default Navbar;
