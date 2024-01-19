import { ChangeEvent, useState } from "react";
import { CustomContainer } from "../../styled/CustomContainer";
import DefaultBalances from "./DefaultBalances";
import ConfirmButton from "../../ConfirmButton";
import { TYPOGRAPHIES, PALETTE } from "../../../theme/theme";
import styled from "styled-components";
import formatNumberToString from "../../../../utils/formatNumber.util";

function AddBalance() {
  const [balanceInput, setBalanceInput] = useState<number | string>("");

  const handleBalanceInput = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/[^0-9]/g, "");

    const truncatedValue = inputValue.slice(0, 7);

    setBalanceInput(truncatedValue);
  };

  return (
    <CustomContainer flexdirection="column" alignitems="center" gap="20px">
      <CustomContainer flexdirection="row" gap="14px">
        <span style={TYPOGRAPHIES.balanceInput}>$</span>
        <CustomInput
          type="text"
          onChange={handleBalanceInput}
          value={balanceInput ? formatNumberToString(Number(balanceInput)) : ""}
          name="balanceInput"
          maxLength={7}
        />
      </CustomContainer>
      <DefaultBalances setter={setBalanceInput} />
      <ConfirmButton
        text="Realizar pago"
        bgColor={PALETTE.confirm}
        action={() => {}}
      />
    </CustomContainer>
  );
}

const CustomInput = styled.input`
  background: transparent;
  border: none;
  font-size: 40px;
  width: auto;
  max-width: 150px;
  appearance: textfield;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: textfield;
  font-family: SF Pro Display;

  &:focus,
  &:active {
    outline: none;
    border: none;
  }
`;

export default AddBalance;
