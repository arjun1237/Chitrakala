import React from "react";
import { StyledTicket } from "../../styling/StyledComponents";

class ConformationPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<StyledTicket>
				<div className="topDiv">
					<div className="mtb textLarge1 textSpaced textDark">
						ORDER CONFORMATION
					</div>
					<div className="flexEqual">
						<div>
							<div className="mtb textB2 textLarge1 textRed">Jolly LLB 2</div>
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
			</StyledTicket>
		);
	}
}

export default ConformationPage;
