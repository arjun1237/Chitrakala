import Styled from "styled-components";
import color from "./theme";

export const StyledNavbar = Styled.div`
    background-color: ${color.bgDark};
    padding: 10px;
    color: ${color.textWhite};
    & .logo{
            font-size : 25px;
        }
`;
