import SubHeader from "../../shared/components/SubHeader";
import ProfileImage from "../../shared/components/layouts/Profile/ProfileImage";
import ProfileInformation from "../../shared/components/layouts/Profile/UserData/ProfileInformation";

function PersonalInformation() {
  return (
    <>
      <SubHeader text="Mis datos personales" />
      <ProfileImage />
      <ProfileInformation />
    </>
  );
}

export default PersonalInformation;
