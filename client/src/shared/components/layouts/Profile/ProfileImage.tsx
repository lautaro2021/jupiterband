import styled from "styled-components";
import { TYPOGRAPHIES } from "../../../theme/theme";

function ProfileImage({ name }: { name: string }) {
  return (
    <CustomProfileImage>
      <picture></picture>
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
    background-color: aquamarine;
  }
`;

export default ProfileImage;
