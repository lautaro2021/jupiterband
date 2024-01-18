import { CaretLeft } from "@phosphor-icons/react";
import styled from "styled-components";
import { PALETTE } from "../theme/theme";

function BackArrow() {
  return (
    <CustomBackArrowContainer>
      <CaretLeft color={PALETTE.neutralWhite} weight="bold" size={20} />
    </CustomBackArrowContainer>
  );
}

const CustomBackArrowContainer = styled.button`
  display: grid;
  place-items: center;
  background-color: ${PALETTE.darkGrey};
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  position: absolute;
  top: 0;
  left: 0;
`;

export default BackArrow;
