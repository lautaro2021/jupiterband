import OptionNavigateRow from "../OptionNavigateRow";
import Card from "../../../Card";
import { CustomContainer } from "../../../styled/CustomContainer";
import { userDataOptions } from "../../../../models/userData.model";
import { PALETTE } from "../../../../theme/theme";

function ProfileInformation() {
  return (
    <Card color={PALETTE.darkGrey} padding="18px 24px" fullsize>
      <CustomContainer flexdirection="column" width="100%" gap="12px">
        {userDataOptions.map((opt, idx) => (
          <OptionNavigateRow
            key={idx}
            path=""
            text={opt.option}
            value={opt.value}
            Icon={opt.Icon}
            exit={opt.delete}
          />
        ))}
      </CustomContainer>
    </Card>
  );
}

export default ProfileInformation;
