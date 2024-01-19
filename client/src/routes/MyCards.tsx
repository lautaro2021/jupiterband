import SubHeader from "../shared/components/SubHeader";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";
import SmallBalance from "../shared/components/layouts/SmallBalance";

function MyCards() {
  const value = 21000;
  return (
    <>
      <SubHeader />
      <SmallBalance value={value} />
      <Transacciones />
    </>
  );
}

export default MyCards;
