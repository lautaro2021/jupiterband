import styled from "styled-components";
import { ActionButtonType } from "../models/actionButton.model";
import { TYPOGRAPHIES } from "../theme/theme";

function ActionButton({ text, bgColor, action, textColor }: ActionButtonType) {
  return (
    <CustomActionButton
      onClick={action}
      bgcolor={bgColor}
      textcolor={textColor}
    >
      <span style={TYPOGRAPHIES.button}>{text}</span>
    </CustomActionButton>
  );
}

interface ActionButtonProps {
  bgcolor: string;
  textcolor: string;
}

const CustomActionButton = styled.button<ActionButtonProps>`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
  border-radius: 8px;
  padding: 13px 20px;
  border: none;
  display: grid;
  place-items: center;

  span {
    margin: 0;
  }
`;

export default ActionButton;
