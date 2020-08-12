import Styled from "styled-components";
import color from "./theme";

export const StyledNavbar = Styled.div`
    background-color: ${color.bgDark};
    padding: 5px;
    color: ${color.textWhite};
    .content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0px auto;
        .searchBox{
            background-color: ${color.bgWhite};
            color: ${color.textSecondary};
            padding:5px;
            border-radius: 4px;
            font-size: 20px;
            svg{
                margin: 0px 3px;
            }
            input{
                border: none;
                font-size: 20px;
                flex: 1;
            }
            input:focus{
                outline: none;
            }
        }
        > div{
            display: flex;
            align-items: center;
            >* {
                margin: 10px;
            }
        }
    }
    .menuItems{
        font-size: 20px;
        & > div{
            opacity: 0.7;
            transition: all 0.5s;
        }
        & > div:hover{
            opacity: 1;
        }
    }
    .logo{
            font-size : 25px;
        }
`;

