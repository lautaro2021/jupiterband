import styled from "styled-components";
import { CustomContainer } from "./styled/CustomContainer";
import { TYPOGRAPHIES, PALETTE } from "../theme/theme";

type EventsCardType = {
  title: string;
  description: string;
  buttonText: string;
  bgImage?: string;
  cssProperties?: React.CSSProperties;
};

function EventsCard({ title, description, buttonText }: EventsCardType) {
  return (
    <CustomEventCard>
      <CustomContainer flexdirection="column">
        <h3 style={TYPOGRAPHIES.h3}>{title}</h3>
        <p style={TYPOGRAPHIES.h6}>{description}</p>
        <CustomEventCardButton>
          <span>{buttonText}</span>
        </CustomEventCardButton>
      </CustomContainer>
    </CustomEventCard>
  );
}

const CustomEventCard = styled.article`
  width: 100%;
  border-radius: 15px;
  color: ${PALETTE.neutralWhite};
  background: linear-gradient(
    268deg,
    rgba(56, 215, 192, 0) -3.12%,
    #008f7a 43.99%
  );
  background-blend-mode: normal, luminosity, normal;
  padding: 24px 22px;

  p {
    margin-top: 6px;
    max-width: 200px;
  }

  button {
    margin-top: 13px;
  }
`;

const CustomEventCardButton = styled.button`
  background-color: ${PALETTE.neutralBlack};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  padding: 6px 12px;
  border: none;
`;

export default EventsCard;
