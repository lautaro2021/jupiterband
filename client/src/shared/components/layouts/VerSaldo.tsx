import { useState } from "react";
import styled from "styled-components";
import formatNumberToString from "../../../utils/formatNumber";
import { nonVisibleNumber } from "../../../utils/formatNumber";
import { EyeClosed } from "@phosphor-icons/react";
import { Eye } from "@phosphor-icons/react";

type VerSaldoType = {
  value: number;
  currency?: string;
};

function VerSaldo({ value }: VerSaldoType) {
  const [showValue, setShowValue] = useState(true);

  const handleValue = () => setShowValue(!showValue);

  return (
    <CustomContainer>
      <span>Saldo disponible</span>
      <div>
        {showValue ? (
          <h1>{`$${formatNumberToString(value)}`}</h1>
        ) : (
          <h1 style={{ height: "73px" }}>{`*${nonVisibleNumber(value)}`}</h1>
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

  span {
    font-size: 18px;
  }

  div {
    display: flex;
    gap: 15px;

    h1 {
      font-size: 55px;
      font-weight: normal;
      line-height: normal;
    }
  }
`;

export default VerSaldo;
