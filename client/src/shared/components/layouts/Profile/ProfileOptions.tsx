import Card from "../../Card";
import OptionRow from "./OptionRow";
import { PALETTE } from "../../../theme/theme";
import { profileData } from "../../../models/profile.model";

function ProfileOptions() {
  return (
    <Card color={PALETTE.darkGrey} padding="18px 24px" fullsize>
      {profileData.map((opt, idx) => (
        <OptionRow
          key={idx}
          text={opt.text}
          Icon={opt.Icon}
          path={opt.path}
          exit={opt.exit}
        />
      ))}
    </Card>
  );
}

export default ProfileOptions;
