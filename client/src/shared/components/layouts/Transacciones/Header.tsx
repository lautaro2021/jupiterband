import { Link } from "react-router-dom";
import { CustomContainer } from "../../styled/CustomContainer";

function Header() {
  return (
    <CustomContainer
      justifyContent="space-between"
      width="100%"
      flexDirection="row"
    >
      <Link to="/">Últimas transacciones</Link>
      <Link to="/">Ver todas</Link>
    </CustomContainer>
  );
}

export default Header;
