import BackArrow from "./BackArrow";
import { CustomContainer } from "./styled/CustomContainer";
import { TYPOGRAPHIES } from "../theme/theme";

function SubHeader({ text }: { text: string }) {
  return (
    <CustomContainer
      flexdirection="row"
      position="relative"
      alignitems="center"
      justifycontent="center"
      height="32px"
    >
      <BackArrow />
      <span style={TYPOGRAPHIES.span}>{text}</span>
    </CustomContainer>
  );
}

export default SubHeader;
