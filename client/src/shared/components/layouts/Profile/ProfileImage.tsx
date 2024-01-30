import styled from "styled-components";
import { TYPOGRAPHIES } from "../../../theme/theme";

function ProfileImage({ name, profile }: { name?: string; profile?: string }) {
    return (
        <CustomProfileImage>
            <picture>
                <img src={profile} alt={name} title="profile" />
            </picture>
            <h3 style={TYPOGRAPHIES.h3}>{name}</h3>
        </CustomProfileImage>
    );
}

const CustomProfileImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background-color: transparent;
    width: 100%;

    picture {
        width: 132px;
        height: 132px;
        border-radius: 100%;
        display: grid;
        place-items: center;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;

export default ProfileImage;
