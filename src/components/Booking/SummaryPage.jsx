import React from "react";
import { StyledTicket } from "../../styling/StyledComponents";

class SummaryPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<StyledTicket>
				<div className="topDiv">
					<div className="flexEqual">
						<div>
							<div className="mtb textLarge1 textSpaced textRed textSpaced">
								ORDER SUMMARY
							</div>
							<div className="mtb textB1 textLarge1 textDark">Jolly LLB 2</div>
							<div className="mtb textSecondary">Hindi</div>
							<div class="mtb textDark textB1">
								<div>Fri, 10 Feb, 2017</div>
								<div>8:15 pm</div>
							</div>
						</div>
						<div className="textCenter">
							<div className="textLarge3 textDark">3</div>
							<div className="textSecondary">tickets</div>
						</div>
					</div>
					<div className="mtb flexEqual">
						<div className="textSecondary">
                            <img src="https://image.flaticon.com/icons/svg/2933/2933170.svg" width="40px"/>
						</div>
						<div className="textDark">
							<input type="checkbox" name="popcorn" />
						</div>
					</div>
				</div>
				<div className="bottomDiv">
					<div className="flexEqual">
						<div className="textSecondary">Sub Total:</div>
						<div className="textDark textLarge1">₹ 1140</div>
					</div>
				</div>
				<div className="yellowDiv flexEqual">
					<div className="textSecondary">Amount Payable</div>
					<div className="textLarge3 textDark">₹ 1246</div>
				</div>
				<div className="button textCenter textLarge3 textB1">Pay Now</div>
			</StyledTicket>
		);
	}
}

export default SummaryPage;
