import Header from "./Header";
import { CustomContainer } from "../../styled/CustomContainer";
import Card from "../../Card";
import TransaccionRow from "./TransaccionRow";
import { PALETTE } from "../../../theme/theme";
import type { TransactionType } from "../../../models/estadoTransaccion.model";

function Transacciones({
  header = true,
  size,
  transactionData,
}: {
  header?: boolean;
  size?: "md";
  transactionData: TransactionType[];
}) {
  const transactionParsedData =
    size === "md" ? transactionData : transactionData.slice(-3);

  return (
    <Card color={PALETTE.darkGrey} padding="18px 24px" fullsize>
      {header && <Header />}
      <CustomContainer
        flexdirection="column"
        width="100%"
        gap="15px"
        margin={!size ? "20px 0px 0px 0px" : ""}
      >
        {transactionParsedData.map((tr, index) => (
          <TransaccionRow
            productDescription={tr.productDescription}
            date={tr.date}
            amount={tr.amount}
            transactionStatus={tr.transactionStatus}
            size={size}
            key={index}
          />
        ))}
      </CustomContainer>
    </Card>
  );
}

export default Transacciones;
