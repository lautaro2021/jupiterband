import VerSaldo from "../shared/components/layouts/VerSaldo";
import MediosDePago from "../shared/components/layouts/MediosDePago";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";
import { transactionFakeData } from "../shared/models/estadoTransaccion.model";

function Root() {
  const value = 21000;
  return (
    <>
      <VerSaldo value={value} />
      <MediosDePago />
      <Transacciones transactionData={transactionFakeData} />
    </>
  );
}

export default Root;
