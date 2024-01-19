import SubHeader from "../shared/components/SubHeader";
import Carousel from "../shared/components/Carousel";
import AddBalance from "../shared/components/layouts/RechargeBalance/AddBalance";

function RechargeBalance() {
  return (
    <>
      <SubHeader text="Elija el método para recargar saldo" />
      <Carousel />
      <AddBalance />
    </>
  );
}

export default RechargeBalance;
