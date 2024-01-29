import VerSaldo from "../shared/components/layouts/VerSaldo";
import MediosDePago from "../shared/components/layouts/MediosDePago";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";
import { transactionFakeData } from "../shared/models/estadoTransaccion.model";
import EventsCard from "../shared/components/EventsCard";

function Root() {
  const value = 21000;
  return (
    <>
      <VerSaldo value={value} />
      <MediosDePago />
      <EventsCard
        title="Mesas VIP"
        description="Mira todos las opciones disponibles esta noche"
        buttonText="Ver mesas"
      />
      <Transacciones transactionData={transactionFakeData} />
    </>
  );
}

export default Root;
