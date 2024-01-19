import styled from "styled-components";
import { TYPOGRAPHIES, PALETTE } from "../theme/theme";

function ConfirmButton({
  text,
  action,
  bgColor,
  textColor,
}: {
  text: string;
  action: () => void;
  bgColor: string;
  textColor?: string;
}) {
  return (
    <CustomConfirmButton
      onClick={action}
      bgcolor={bgColor}
      textcolor={textColor}
    >
      <span style={TYPOGRAPHIES.span}>{text}</span>
    </CustomConfirmButton>
  );
}

interface ConfirmButtonProps {
  bgcolor: string;
  textcolor?: string;
}

const CustomConfirmButton = styled.button<ConfirmButtonProps>`
  width: 100%;
  display: grid;
  place-content: center;
  border-radius: 100px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) =>
    props.textcolor ? props.textcolor : PALETTE.neutralBlack};
  border: none;
  padding: 14px 0px;
  margin-top: 10px;
`;

export default ConfirmButton;
