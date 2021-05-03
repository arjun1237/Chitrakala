import React from "react";
import { StyledTicket } from "../../styling/StyledComponents";
import {DataContext} from '../../context/DataContextProvider'

class SummaryPage extends React.Component {

	handleChange = (e) => {
		this.context.addPopcorn(e.target.checked)
	}

	render() {
		let {price, dateSelect, seatSelect, timeSelect} = this.context
		price += this.context.popcorn ? 100 : 0
		let movie = this.context.movies.filter(x => x.id === this.context.movieSelect)[0]
		return (
			<StyledTicket>
				<div className="topDiv">
					<div className="flexEqual">
						<div>
							<div className="mtb textLarge1 textSpaced textRed textSpaced">
								ORDER SUMMARY
							</div>
							<div className="mtb textB1 textLarge1 textDark">{movie.title}</div>
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
					<div className="mtb flexEqual">
						<div className="textSecondary">
                            <img src="https://image.flaticon.com/icons/svg/2933/2933170.svg" width="40px" alt="" />
						</div>
						<div className="textDark">
							<input type="checkbox" name="popcorn" onChange={this.handleChange}  />
						</div>
					</div>
				</div>
				<div className="bottomDiv">
					<div className="flexEqual">
						<div className="textSecondary">Sub Total:</div>
						<div className="textDark textLarge1">₹ {price}</div>
					</div>
				</div>
				<div className="yellowDiv flexEqual">
					<div className="textSecondary">Amount Payable (inc. GST)</div>
					<div className="textLarge3 textDark">₹ {Math.round(price + (price*0.18))}</div>
				</div>
				<div className="button textCenter textLarge3 textB1" onClick={this.context.dataChange4} style={{cursor: "pointer"}} >Pay Now</div>
			</StyledTicket>
		);
	}
}

SummaryPage.contextType = DataContext

export default SummaryPage;
