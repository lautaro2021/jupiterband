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
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <CustomContainer flexDirection="row" alignItems="center" gap="8px">
        <ProductImage productName={productDescription} />
        <CustomContainer flexDirection="column">
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
      <CustomContainer flexDirection="column" alignItems="flex-end">
        <h5>{`$${formatNumberToString(amount)}`}</h5>
        <CustomTransactionStatus status={transactionStatus}>
          {transactionStatus}
        </CustomTransactionStatus>
      </CustomContainer>
    </CustomArticleContainer>
  );
}

export default TransaccionRow;
