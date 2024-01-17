import styled from "styled-components";
import {
  TransactionStatus,
  TransactionStatusType,
} from "../../models/estadoTransaccion.model";
import { TYPOGRAPHIES } from "../../theme/theme";

interface CustomTransactionProps {
  status: TransactionStatusType;
}

export const CustomTransactionStatus = styled.h6<CustomTransactionProps>`
  color: ${(props) => TransactionStatus[props.status]};
  font-size: ${TYPOGRAPHIES.h6.fontSize};
  font-weight: ${TYPOGRAPHIES.h6.fontWeight};
  font-style: ${TYPOGRAPHIES.h6.fontStyle};
  line-height: ${TYPOGRAPHIES.h6.lineHeight};
`;
