import React from "react";
import { StyledTicket } from "../../styling/StyledComponents";
import {DataContext} from '../../context/DataContextProvider'

class ConfirmationPage extends React.Component {

	render() {
		let {movies, movieSelect, dateSelect, timeSelect, seatSelect, popcorn, price, bookingID} = this.context
		let movie = movies.filter(x => x.id === movieSelect)[0]
		price += popcorn ? 100 : 0
		return (
			<StyledTicket>
				<div className="topDiv">
					<div className="mtb textLarge1 textSpaced textDark">
						ORDER CONFIRMATION
					</div>
					<div className="flexEqual">
						<div>
							<div className="mtb textB2 textLarge1 textRed">{movie.title}</div>
							<div className="mtb textSecondary">{movie.language}</div>
							<div className="mtb textDark textB1">
								<div>{dateSelect}</div>
								<div>{timeSelect}</div>
							</div>
						</div>
						<div className="textCenter">
							<div className="textLarge3 textDark">{seatSelect.length}</div>
							<div className="textSecondary">tickets</div>
							<div className="textDark" style={{marginTop: "20px"}}><b>Seats:</b> {seatSelect.join(', ')}</div>
						</div>
					</div>
					<div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
						<small><b>Booking ID</b></small>
						<small>{bookingID}</small>
					</div>
				</div>
				<div className="bottomDiv">
					<div className="flexEqual">
						<div className="textSecondary">Sub Total:</div>
						<div className="textDark textLarge1">₹ {price}</div>
					</div>
				</div>
				<div className="yellowDiv flexEqual">
					<div className="textSecondary">Amount Payable</div>
					<div className="textLarge3 textDark">₹ {Math.round(price + price * 0.18)}</div>
				</div>
			</StyledTicket>
		);
	}
}

ConfirmationPage.contextType = DataContext

export default ConfirmationPage;
