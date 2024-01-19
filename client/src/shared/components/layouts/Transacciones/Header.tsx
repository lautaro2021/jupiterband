import { CustomLink } from "../../styled/CustomLink";
import { CustomContainer } from "../../styled/CustomContainer";
import { PALETTE, TYPOGRAPHIES } from "../../../theme/theme";

function Header() {
  return (
    <CustomContainer
      justifycontent="space-between"
      width="100%"
      flexdirection="row"
    >
      <h4 style={TYPOGRAPHIES.h4}>Últimas transacciones</h4>
      <CustomLink
        to="/transacciones"
        color={PALETTE.neutralWhite}
        flexdirection="row"
      >
        <h4 style={TYPOGRAPHIES.h4}>Ver todas</h4>
      </CustomLink>
    </CustomContainer>
  );
}

export default Header;
