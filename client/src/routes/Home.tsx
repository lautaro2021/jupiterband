import VerSaldo from "../shared/components/layouts/VerSaldo";
import MediosDePago from "../shared/components/layouts/MediosDePago";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";

function Root() {
  const value = 21000;
  return (
    <>
      <VerSaldo value={value} />
      <MediosDePago />
      <Transacciones />
    </>
  );
}

export default Root;
