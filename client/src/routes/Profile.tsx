import { useSelector } from "react-redux";
import { selectUser } from "../redux/reducers/authSlice.slice";
import styled from "styled-components";
import SubHeader from "../shared/components/SubHeader";
import ProfileImage from "../shared/components/layouts/Profile/ProfileImage";
import ProfileOptions from "../shared/components/layouts/Profile/ProfileOptions";

function Profile() {
    const user = useSelector(selectUser);

    return (
        <>
            <SubHeader />
            <CustomBackground />
            <ProfileImage
                name={user?.nickname ?? ""}
                profile={user?.picture ?? ""}
            />
            <ProfileOptions />
        </>
    );
}

const CustomBackground = styled.div`
    width: 100%;
    height: 230px;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("/backgrounds/profile.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
`;

export default Profile;
