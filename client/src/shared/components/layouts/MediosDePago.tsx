import Card from "../Card";
import { mediosData } from "../../models/mediosDePage.model";
import { CustomContainer } from "../styled/CustomContainer";
import { addStyleProps } from "../../../utils/addStyleProps";
import { TYPOGRAPHIES } from "../../theme/theme";
import { PALETTE } from "../../theme/theme";
import styled from "styled-components";

function MediosDePago() {
  const padding = "30px 26px 25px";
  return (
    <CustomContainer gap={"15px"} flexDirection="row">
      {mediosData.map((card, index) => (
        <Card color={card.color} key={index} padding={padding}>
          <CustomContainer alignItems="center" flexDirection="column">
            <CustomIcon>
              <card.icon />
            </CustomIcon>
            <h3
              style={addStyleProps(
                { textAlign: "center", marginTop: "8px" },
                TYPOGRAPHIES.h3
              )}
            >
              {card.title}
            </h3>
          </CustomContainer>
        </Card>
      ))}
    </CustomContainer>
  );
}

const CustomIcon = styled.picture`
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  background-color: ${PALETTE.neutralWhite};
  border-radius: 999px;
`;

export default MediosDePago;
