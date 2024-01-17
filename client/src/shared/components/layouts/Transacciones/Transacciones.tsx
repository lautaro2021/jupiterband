import Header from "./Header";
import { CustomContainer } from "../../styled/CustomContainer";
import Card from "../../Card";
import TransaccionRow from "./TransaccionRow";
import { PALETTE } from "../../../theme/theme";
import { transactionFakeData } from "../../../models/estadoTransaccion.model";

function Transacciones() {
  return (
    <Card color={PALETTE.darkGrey} padding="18px 24px" fullSize>
      <Header />
      <CustomContainer
        flexDirection="column"
        width="100%"
        gap="15px"
        margin="20px 0px 0px 0px"
      >
        {transactionFakeData.map((tr, index) => (
          <TransaccionRow
            productDescription={tr.productDescription}
            date={tr.date}
            amount={tr.amount}
            transactionStatus={tr.transactionStatus}
            key={index}
          />
        ))}
      </CustomContainer>
    </Card>
  );
}

export default Transacciones;
