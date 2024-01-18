import {
  CustomArticleContainer,
  CustomContainer,
} from "../../styled/CustomContainer";
import { CustomTransactionStatus } from "../../styled/TransactionStatus";
import formatNumberToString from "../../../../utils/formatNumber.util";
import { ProductImage } from "../../ProductImage";
import { addStyleProps } from "../../../../utils/addStyleProps.util";
import type { TransactionType } from "../../../models/estadoTransaccion.model";
import { PALETTE, TYPOGRAPHIES } from "../../../theme/theme";

function TransaccionRow({
  productDescription,
  date,
  amount,
  transactionStatus,
}: TransactionType) {
  return (
    <CustomArticleContainer
      flexdirection="row"
      justifycontent="space-between"
      alignitems="center"
      width="100%"
    >
      <CustomContainer flexdirection="row" alignitems="center" gap="8px">
        <ProductImage productName={productDescription} />
        <CustomContainer flexdirection="column">
          <h5 style={TYPOGRAPHIES.h5}>{productDescription}</h5>
          <h6
            style={addStyleProps(
              { color: `${PALETTE.greyText}` },
              TYPOGRAPHIES.h6
            )}
          >
            {date}
          </h6>
        </CustomContainer>
      </CustomContainer>
      <CustomContainer flexdirection="column" alignitems="flex-end">
        <h5>{`$${formatNumberToString(amount)}`}</h5>
        <CustomTransactionStatus status={transactionStatus}>
          {transactionStatus}
        </CustomTransactionStatus>
      </CustomContainer>
    </CustomArticleContainer>
  );
}

export default TransaccionRow;
