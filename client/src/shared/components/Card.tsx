import styled from "styled-components";
import { HTMLAttributes } from "react";

interface CustomCardProps extends HTMLAttributes<HTMLElement> {
  color?: string;
  padding?: string;
  fullsize?: boolean;
  absolute?: boolean;
  margin?: string;
}

const Card = styled.section<CustomCardProps>`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  ${(props) =>
    props.fullsize
      ? `
    width: 100%;
    max-width: none;
  
  `
      : `width: 50%`};
  ${(props) =>
    props.absolute
      ? `
    position: absolute;
    bottom: 125px;
    left: 50%;
    transform: translateX(-50%);
  `
      : ""}
  span {
    margin-top: 8px;
    font-size: 22px;
    font-weight: 300;
    text-align: center;
    line-height: normal;
  }
`;

export default Card;
