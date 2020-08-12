import Styled from "styled-components";
import color from "./theme";

export const  StyledLandingPage = Styled.div`
    max-width: 1200px;
    display: grid;
    margin: 10px auto;
    padding: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    & > div{
        margin: 15px;
    }
`
export const StyledMovieCard = Styled.div`
    background-color:${color.bgWhite};
    display:flex;
    flex-direction: column;
    .image{
        height: 350px;
        background-position: center;
        background-size: contain;
        box-shadow: 0px 80px 80px -80px #000 inset, 0px -80px 80px -80px #000 inset;
    }
    .content{
        flex: 1;
        padding: 7px;
        .name{
            font-size: 22px;
            color:${color.textMain}
            font-weigth: 700;
        }
        .language{
            color:${color.textSecondary}
        }
        >*{
            padding: 5px;
        }
    }
    .bookButton{
        color:${color.textWhite};
        background: ${color.bgMain};
        padding: 10px;
        font-size: 20px;
        text-align: center;
        font-weight: 700;
        cursor: pointer;
    }

    .bookButton:hover{
        background: red;
    }
`