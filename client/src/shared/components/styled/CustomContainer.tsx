import styled from "styled-components";
import { ContainerProps } from "../../../types/html.types";

export const CustomContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifycontent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
`;

export const CustomArticleContainer = styled.article<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  align-items: ${(props) => props.alignitems};
  justify-content: ${(props) => props.justifycontent};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  position: ${(props) => props.position};
`;
