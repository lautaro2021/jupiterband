import { CustomContainer } from "../../styled/CustomContainer";
import SetterButton from "../../SetterButton";
import { defaultBalances } from "../../../models/balance.model";
import { Dispatch, SetStateAction } from "react";

function DefaultBalances({
  setter,
}: {
  setter: Dispatch<SetStateAction<string | number>>;
}) {
  const setDefaultValue = (val: number) => setter(val);

  return (
    <CustomContainer
      flexdirection="row"
      alignitems="center"
      justifycontent="space-between"
      width="100%"
      gap="8px"
    >
      {defaultBalances.map((val, idx) => (
        <SetterButton
          value={val}
          key={idx}
          action={() => setDefaultValue(val)}
        />
      ))}
    </CustomContainer>
  );
}

export default DefaultBalances;
