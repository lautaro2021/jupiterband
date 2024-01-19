import SubHeader from "../shared/components/SubHeader";
import MyCardsCarousel from "../shared/components/MyCardsCarousel";
import Transacciones from "../shared/components/layouts/Transacciones/Transacciones";
import SmallBalance from "../shared/components/layouts/SmallBalance";

function MyCards() {
  const value = 21000;
  return (
    <>
      <SubHeader />
      <MyCardsCarousel />
      <SmallBalance value={value} />
      <Transacciones />
    </>
  );
}

export default MyCards;
