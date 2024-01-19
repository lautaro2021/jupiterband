import styled from "styled-components";
import { Link } from "react-router-dom";
import { ContainerProps } from "../../../types/html.types";

export const CustomLink = styled(Link)<ContainerProps>`
  text-decoration: none;
  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifycontent};
  color: ${(props) => props.color};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  border-bottom: ${(props) => props.borderbottom};

  span {
    margin-top: 0px;
  }
`;
