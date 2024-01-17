import { CustomLink } from "../../styled/CustomLink";
import { CustomContainer } from "../../styled/CustomContainer";
import { PALETTE, TYPOGRAPHIES } from "../../../theme/theme";

function Header() {
  return (
    <CustomContainer
      justifyContent="space-between"
      width="100%"
      flexDirection="row"
    >
      <CustomLink to="/" color={PALETTE.neutralWhite}>
        <h4 style={TYPOGRAPHIES.h4}>Últimas transacciones</h4>
      </CustomLink>
      <CustomLink to="/" color={PALETTE.neutralWhite}>
        <h4 style={TYPOGRAPHIES.h4}>Ver todas</h4>
      </CustomLink>
    </CustomContainer>
  );
}

export default Header;
