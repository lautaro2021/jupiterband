import styled from "styled-components";
import { ContainerProps } from "../../../types/html.types";

export const CustomContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export const CustomArticleContainer = styled.article<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;
