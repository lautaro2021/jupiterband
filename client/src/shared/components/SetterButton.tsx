import styled from "styled-components";
import { PALETTE, TYPOGRAPHIES } from "../theme/theme";
import formatNumberToString from "../../utils/formatNumber.util";

function SetterButton({
  value,
  action,
}: {
  value: number;
  action: (val: number) => void;
}) {
  return (
    <CustomSetterButton onClick={() => action(value)}>
      <span style={TYPOGRAPHIES.setterButton}>
        {`$${formatNumberToString(value)}`}
      </span>
    </CustomSetterButton>
  );
}

const CustomSetterButton = styled.button`
  width: 100%;
  background-color: ${PALETTE.darkGrey};
  padding: 10px 26px;
  border-radius: 100px;
  display: grid;
  place-items: center;
  border: none;
`;

export default SetterButton;
