import styled from "styled-components";
import { theme } from "../theme/theme";
import { HTMLAttributes } from "react";

type CardType = {
  color: string;
  padding: string;
  children?: React.ReactNode;
  fullSize?: boolean;
};

function Card({ color, padding, children, fullSize }: CardType) {
  return (
    <CustomCard color={color} padding={padding} fullSize={fullSize}>
      {children}
    </CustomCard>
  );
}

interface CustomCardProps extends HTMLAttributes<HTMLElement> {
  color?: string;
  padding?: string;
  fullSize?: boolean;
}

const CustomCard = styled.article<CustomCardProps>`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color};
  padding: ${(props) => props.padding};
  ${(props) =>
    props.fullSize
      ? `
    width: 100%;
    max-width: none;
  
  `
      : `width: 50%`};

  picture {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    background-color: ${theme.neutralWhite};
    border-radius: 999px;
  }

  span {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    line-height: normal;
  }
`;

export default Card;
