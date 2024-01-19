import { CustomLink } from "../../styled/CustomLink";
import type { ProfileOptionType } from "../../../models/profile.model";
import { TYPOGRAPHIES, PALETTE } from "../../../theme/theme";
import { CustomContainer } from "../../styled/CustomContainer";
import { addStyleProps } from "../../../../utils/addStyleProps.util";

function OptionNavigateRow({
  text,
  Icon,
  path,
  exit,
  value,
}: ProfileOptionType) {
  return (
    <CustomLink
      to={path}
      flexdirection="row"
      alignitems="center"
      justifycontent="space-between"
      width="100%"
      color={!exit ? PALETTE.neutralWhite : PALETTE.cancel}
      padding={!exit ? "0px 0px 12px 0px" : ""}
      borderbottom={!exit ? `1px solid ${PALETTE.lightGrey}` : ""}
    >
      <CustomContainer flexdirection="column" alignitems="flex-start" gap="4px">
        <span style={TYPOGRAPHIES.span}>{text}</span>
        {value && (
          <span
            style={addStyleProps(
              { color: `${PALETTE.greyText}` },
              TYPOGRAPHIES.userValue
            )}
          >
            {value}
          </span>
        )}
      </CustomContainer>
      {Icon && <Icon />}
    </CustomLink>
  );
}

export default OptionNavigateRow;
