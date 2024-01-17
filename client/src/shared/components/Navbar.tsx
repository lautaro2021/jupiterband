import styled from "styled-components";
import { PALETTE } from "../theme/theme";

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
      </ul>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: transparent;
  height: 70px;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 15px;

    li {
      list-style: none;

      div {
        width: 38px;
        height: 38px;
        border-radius: 100%;
        background-color: ${PALETTE.primary};
      }
    }
  }
`;

export default Navbar;
