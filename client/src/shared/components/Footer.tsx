import styled from "styled-components";
import { PALETTE, TYPOGRAPHIES } from "../theme/theme";
import { footerOptions } from "../models/footerOptions.model";

function Footer() {
  return (
    <CustomFooter>
      <ul>
        {footerOptions.map((option, i) => (
          <li key={i}>
            {option.title ? (
              <>
                {option.Img && <option.Img />}
                <h6 style={TYPOGRAPHIES.h6}>{option.title}</h6>
              </>
            ) : (
              <div></div>
            )}
            <></>
          </li>
        ))}
      </ul>
    </CustomFooter>
  );
}

const CustomFooter = styled.section`
  height: 100px;
  border-radius: 30px 30px 0px 0px;
  background-color: ${PALETTE.neutral};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;

    li {
      list-style: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      div {
        background-color: ${PALETTE.primary};
        width: 55px;
        height: 55px;
        border-radius: 100%;
      }
    }
  }
`;

export default Footer;
