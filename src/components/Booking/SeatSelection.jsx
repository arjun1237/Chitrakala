import React, { Component } from "react";
import styled from "styled-components";
import colors from "../../styling/theme";
import { DataContext } from "../../context/DataContextProvider";

export default class SeatSelection extends Component {
	constructor(props) {
		super(props);

		this.state = {
			seatsSelect: [],
		};
	}

	getSeats = (seatsBooked) => {
		let x = 1;
		let out = [];
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				out.push([
					x,
					seatsBooked.includes(x) ? 1 : this.state.seatsSelect.includes(x) ? 2 : 3,
				]);
				x++;
			}
		}
		return out;
	};

	selectSeat = (seat) => {
        seat = Number(seat)
		console.log(seat);
        let payload = [...this.state.seatsSelect];
        const index = payload.indexOf(seat);
        if (index > -1) {
            payload.splice(index, 1);
        }
        else{
            payload.push(seat);
        }
		this.setState({ seatsSelect: payload });
	};

	render() {
		let { slotDetails } = this.context;
        let seatsBooked = slotDetails.seats_booked;
        console.log(seatsBooked)
		let seats = this.getSeats(seatsBooked);
		let m = -1;
		return (
			<div>
				<CinemaHandler> SCREEN THIS WAY </CinemaHandler>
				<SeatHandler>
					{[...Array(10).keys()].map((x) => (
						<SeatRow key={x}>
							{[...Array(10).keys()].map((y, j) => (
								<Seat
									select={seats[++m][1]}
									key={m}
									onClick={() =>
										this.selectSeat(y === 9 ? x + 1 + "0" : x + "" + (y + 1))
									}
								>
									{" "}
									<div
										style={{ width: "100%", display: "flex", justifyContent: "center" }}
									>
										{" "}
										{seats[m][0]}
                                        {" "}
									</div>
								</Seat>
							))}
						</SeatRow>
					))}
				</SeatHandler>
				<div style={{ display: "flex" }}>
					<Button onClick={() => this.context.dataChange3(this.state.seatsSelect)}>
						PROCEED
					</Button>
				</div>
			</div>
		);
	}
}

SeatSelection.contextType = DataContext;

const Button = styled.button`
	background-color: ${colors.themeMain};
	color: #f5dcd7;
	border: none;
	font-weight: 600;
	letter-spacing: 1px;
	padding: 7px 25px;
	text-align: center;
	margin: auto;
	font-size: 20px;
	border-radius: 4px;
	cursor: pointer;

	&:focus {
		outline: none;
	}

	&:active {
		background-color: red;
    }
    
    &:hover {
        color: white;
    }
`;

const SeatRow = styled.div`
	display: flex;
	justify-content: space-around;
`;

const SeatHandler = styled.div`
    padding: 20px;
    /* background-color:${colors.bgWhite}; */
`;

const Seat = styled.div`

    // for booking seats
    ${(props) =>
					props.select === 2 &&
					` 
        background-color: ${colors.textSuccess};
        border: 2px solid ${colors.textSuccess};
        color: white; 
        cursor: pointer;`}

    // for not available seats
    ${(props) =>
					props.select === 1 &&
					` 
        background-color: whitesmoke;
        border: 2px solid #bfbfbf;
        color: #bfbfbf;`}

    // for available seats
    ${(props) =>
					props.select === 3 &&
					` 
        background-color: white;
        border: 2px solid ${colors.textSuccess};
        color: ${colors.textSuccess};
        cursor: pointer;`}

    display: grid;
    place-items: center;
    height: 25px;
    width: 30px;
    margin: 4px;
    font-size: 12px;
    border-radius: 8px;
    font-weight: 600;

    &:hover{
        // only for available
        ${(props) =>
									props.select === 3 &&
									` 
            background-color: #208c62;
            color: white;`}
    }
`;

const CinemaHandler = styled.div`
	background-color: white;
	text-align: center;
	font-weight: 600;
	padding: 10px;
	color: ${colors.textSecondary};
	border-top: 2px solid lightgray;
	border-right: 2px solid lightgray;
	border-left: 2px solid lightgray;
`;
