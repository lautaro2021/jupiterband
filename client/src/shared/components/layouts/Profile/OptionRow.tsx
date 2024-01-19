import { CustomLink } from "../../styled/CustomLink";
import type { ProfileOptionType } from "../../../models/profile.model";
import { TYPOGRAPHIES, PALETTE } from "../../../theme/theme";

function OptionRow({ text, Icon, path, exit }: ProfileOptionType) {
  return (
    <CustomLink
      to={path}
      flexdirection="row"
      alignitems="center"
      justifycontent="space-between"
      width="100%"
      color={!exit ? PALETTE.neutralWhite : PALETTE.cancel}
      padding={!exit ? "10px 0px 12px 0px" : "14px 0px"}
      borderbottom={!exit ? `1px solid ${PALETTE.lightGrey}` : ""}
    >
      <span style={TYPOGRAPHIES.span}>{text}</span>
      <Icon />
    </CustomLink>
  );
}

export default OptionRow;
