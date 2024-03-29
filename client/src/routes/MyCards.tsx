import SubHeader from "../shared/components/SubHeader";
import Carousel from "../shared/components/Carousel";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";
import SmallBalance from "../shared/components/layouts/SmallBalance";
import { transactionFakeData } from "../shared/models/estadoTransaccion.model";

function MyCards() {
  const value = 21000;
  return (
    <>
      <SubHeader text="Tarjetas vinculadas" />
      <Carousel />
      <SmallBalance value={value} />
      <Transacciones transactionData={transactionFakeData} />
    </>
  );
}

export default MyCards;
