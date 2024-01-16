import Footer from "../shared/components/Footer";
import Navbar from "../shared/components/Navbar";
import VerSaldo from "../shared/components/layouts/VerSaldo";
import MediosDePago from "../shared/components/layouts/MediosDePago";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";

function Root() {
  const value = 21000;
  return (
    <>
      <Navbar />
      <VerSaldo value={value} />
      <MediosDePago />
      <Transacciones />
      <Footer />
    </>
  );
}

export default Root;
