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
            padding:8px;
            border-radius: 4px;
            font-size: 20px;
            svg{
                margin: 0px 3px;
            }
            input{
                border: none;
                font-size: 18px;
                flex: 1;
            }
            input:focus{
                outline: none;
            }
        }
        & > div{
            display: flex;
            align-items: center;
            & > * {
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
            font-family: 'Cookie', cursive;
            font-size: 35px;
        }
`;

export const StyledTicket = Styled.div`
	margin: 10px;
	width: 400px;
	.textDark {
		color: ${color.textMain};
	}
	.textSecondary {
		color: ${color.textSecondary};
	}
	.textRed {
		color: ${color.themeMain};
	}
	.textSpaced {
		letter-spacing: 3px;
	}

	.textLarge1 {
		font-size: 20px;
	}
	.textLarge2 {
		font-size: 23px;
    }
    .textLarge3 {
		font-size: 26px;
	}
    .textB1 {
		font-weight: 500;
	}
	.textB2 {
		font-weight: 700;
    }
    .flexEqual{
        align-items: center;
        display: flex;
        
        &>div:first-child{
            flex:1;
        }
    }
    .mt{
        margin-top:10px;
    }
    .mtb{
        margin:10px 0;
    }
    .mb{
        margin-bottom:10px;
    }
    .textCenter{
        text-align:center;
    }
	.topDiv::before {
		content: "";
		position: absolute;
		width: 15px;
		height: 30px;
		border-radius: 15px 0 0 15px;
		background-color: ${color.bgSecondary};
		bottom: -15px;
		right: 0px;
	}
	.topDiv::after {
		content: "";
		position: absolute;
		width: 15px;
		height: 30px;
		border-radius: 0 15px 15px 0;
		background-color: ${color.bgSecondary};
		bottom: -15px;
		left: 0px;
	}
	.topDiv {
		border-bottom: 2px dashed ${color.bgSecondary};
		position: relative;
	}
	> div {
		background-color: ${color.bgWhite};
		padding: 30px;
    }
    .yellowDiv{
        background-color: #fefbd6;
        padding:10px 20px;
    }
    .button{
        background-color: ${color.bgMain};
        color: ${color.textWhite};
        padding:10px 20px;
    }
`;
