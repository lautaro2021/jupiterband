import Card from "../../Card";
import OptionNavigateRow from "./OptionNavigateRow";
import { PALETTE } from "../../../theme/theme";
import { profileData } from "../../../models/profile.model";
import { CustomContainer } from "../../styled/CustomContainer";

function ProfileOptions() {
  return (
    <Card color={PALETTE.darkGrey} padding="18px 24px" fullsize>
      <CustomContainer flexdirection="column" width="100%" gap="12px">
        {profileData.map((opt, idx) => (
          <OptionNavigateRow
            key={idx}
            text={opt.text}
            Icon={opt.Icon}
            path={opt.path}
            exit={opt.exit}
          />
        ))}
      </CustomContainer>
    </Card>
  );
}

export default ProfileOptions;
