import styled from "styled-components";
import { HTMLAttributes } from "react";

type CardType = {
  color: string;
  padding: string;
  children?: React.ReactNode;
  fullsize?: boolean;
};

function Card({ color, padding, children, fullsize }: CardType) {
  return (
    <CustomCard color={color} padding={padding} fullsize={fullsize}>
      {children}
    </CustomCard>
  );
}

interface CustomCardProps extends HTMLAttributes<HTMLElement> {
  color?: string;
  padding?: string;
  fullsize?: boolean;
}

const CustomCard = styled.section<CustomCardProps>`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color};
  padding: ${(props) => props.padding};
  ${(props) =>
    props.fullsize
      ? `
    width: 100%;
    max-width: none;
  
  `
      : `width: 50%`};

  span {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    line-height: normal;
  }
`;

export default Card;
