import { CustomContainer } from "../styled/CustomContainer";
import Card from "../Card";
import NavigateButton from "../NavigateButton";
import { TYPOGRAPHIES, PALETTE } from "../../theme/theme";
import formatNumberToString from "../../../utils/formatNumber.util";

function SmallBalance({ value }: { value: number }) {
  return (
    <CustomContainer flexdirection="column" width="100%" gap="8px">
      <span style={TYPOGRAPHIES.span}>Saldo disponible</span>
      <Card padding="18px 24px" color={PALETTE.darkGrey} fullsize>
        <CustomContainer
          flexdirection="row"
          width="100%"
          alignitems="center"
          justifycontent="space-between"
        >
          <h2 style={TYPOGRAPHIES.h2}>{`$${formatNumberToString(value)}`}</h2>
          <NavigateButton
            text="Recargar saldo"
            textColor={PALETTE.neutralBlack}
            bgColor={PALETTE.aquamarine}
            path="/recargar-saldo"
          />
        </CustomContainer>
      </Card>
    </CustomContainer>
  );
}

export default SmallBalance;
