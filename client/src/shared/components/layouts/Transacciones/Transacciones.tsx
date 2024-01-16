import Header from "./Header";
import { CustomContainer } from "../../styled/CustomContainer";
import Card from "../../Card";
import { theme } from "../../../theme/theme";

function Transacciones() {
  return (
    <Card color={theme.darkGrey} padding="12px 16px" fullSize>
      <Header />
      <CustomContainer flexDirection="column"></CustomContainer>
    </Card>
  );
}

export default Transacciones;
