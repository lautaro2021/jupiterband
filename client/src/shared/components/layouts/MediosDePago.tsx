import Card from "../Card";
import { mediosData } from "../../models/mediosDePage.model";
import { CustomContainer } from "../styled/CustomContainer";

function MediosDePago() {
  const padding = "30px 26px 25px";
  return (
    <CustomContainer gap={"15px"} flexDirection="row">
      {mediosData.map((card, index) => (
        <Card color={card.color} key={index} padding={padding}>
          <CustomContainer alignItems="center" flexDirection="column">
            <picture>
              <card.icon />
            </picture>
            <span>{card.title}</span>
          </CustomContainer>
        </Card>
      ))}
    </CustomContainer>
  );
}

export default MediosDePago;
