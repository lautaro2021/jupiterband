import SubHeader from "../shared/components/SubHeader";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";
import { transactionFakeData } from "../shared/models/estadoTransaccion.model";

function Transactions() {
  return (
    <>
      <SubHeader text="Todas mis transacciones" />
      <Transacciones
        header={false}
        size="md"
        transactionData={transactionFakeData}
      />
    </>
  );
}

export default Transactions;
