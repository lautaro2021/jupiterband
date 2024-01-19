import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavigateButtonType } from "../models/actionButton.model";
import { TYPOGRAPHIES } from "../theme/theme";

function NavigateButton({
  text,
  bgColor,
  path,
  textColor,
}: NavigateButtonType) {
  return (
    <CustomNavigateButton bgcolor={bgColor} textcolor={textColor} to={path}>
      <span style={TYPOGRAPHIES.button}>{text}</span>
    </CustomNavigateButton>
  );
}

interface NavigateButtonProps {
  bgcolor: string;
  textcolor: string;
}

const CustomNavigateButton = styled(Link)<NavigateButtonProps>`
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
  border-radius: 8px;
  padding: 13px 20px;
  border: none;
  display: grid;
  place-items: center;
  text-decoration: none;

  span {
    margin: 0;
  }
`;

export default NavigateButton;
