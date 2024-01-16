import styled from "styled-components";
import { ContainerProps } from "../../../types/container.types";

export const CustomContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  width: ${(props) => props.width};
  gap: ${(props) => props.gap};
`;
