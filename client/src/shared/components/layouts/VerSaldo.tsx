import { useState } from "react";
import styled from "styled-components";
import formatNumberToString from "../../../utils/formatNumber";
import { nonVisibleNumber } from "../../../utils/formatNumber";
import { EyeClosed } from "@phosphor-icons/react";
import { Eye } from "@phosphor-icons/react";
import { TYPOGRAPHIES } from "../../theme/theme";

type VerSaldoType = {
  value: number;
  currency?: string;
};

function VerSaldo({ value }: VerSaldoType) {
  const [showValue, setShowValue] = useState(true);

  const handleValue = () => setShowValue(!showValue);

  return (
    <CustomContainer>
      <span style={TYPOGRAPHIES.span}>Saldo disponible</span>
      <div style={{ height: "65px" }}>
        {showValue ? (
          <h1 style={TYPOGRAPHIES.h1}>{`$${formatNumberToString(value)}`}</h1>
        ) : (
          <h1 style={TYPOGRAPHIES.h1}>{`*${nonVisibleNumber(value)}`}</h1>
        )}

        {showValue ? (
          <EyeClosed size={26} weight="bold" onClick={handleValue} />
        ) : (
          <Eye size={26} weight="bold" onClick={handleValue} />
        )}
      </div>
    </CustomContainer>
  );
}

const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  div {
    display: flex;
    gap: 15px;
  }
`;

export default VerSaldo;
