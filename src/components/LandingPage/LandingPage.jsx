import React from "react";
import MovieCard from "./MovieCard";
import movieData from "../../JSON/movie.json"
import { StyledLandingPage } from "../../styling/StyledLandingPageComponents";

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<StyledLandingPage>
				{
                    movieData?.map(movie=>
                        <MovieCard key={movie.id} data={movie}/>
                        )
                }
			</StyledLandingPage>
		);
	}
}

export default LandingPage;
