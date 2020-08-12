import React from "react";
import MovieCard from "./MovieCard";
import { StyledLandingPage } from "../../styling/StyledLandingPageComponents";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<StyledLandingPage>
				<MovieCard />
			</StyledLandingPage>
		);
	}
}

export default LandingPage;
