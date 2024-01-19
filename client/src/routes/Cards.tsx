import SubHeader from "../shared/components/SubHeader";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";
import SeeBalanceSmall from "../shared/components/layouts/seeBalanceSmall";

function Cards() {
  const value = 21000;
  return (
    <>
      <SubHeader />
      <SeeBalanceSmall value={value} />
      <Transacciones />
    </>
  );
}

export default Cards;
