import BackArrow from "./BackArrow";
import { CustomContainer } from "./styled/CustomContainer";
import { TYPOGRAPHIES } from "../theme/theme";

function SubHeader() {
  return (
    <CustomContainer
      flexdirection="row"
      position="relative"
      alignitems="center"
      justifycontent="center"
      height="32px"
    >
      <BackArrow />
      <span style={TYPOGRAPHIES.span}>Tarjetas vinculadas</span>
    </CustomContainer>
  );
}

export default SubHeader;
