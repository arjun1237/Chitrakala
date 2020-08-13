import React from "react";
import MovieCard from "./MovieCard";
import movieData from "../../JSON/movie.json"
import { StyledLandingPage } from "../../styling/StyledLandingPageComponents";
import {DataContext} from '../../context/DataContextProvider'

class LandingPage extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount = () => {
		this.context.setLocation()
	}

	returnMovies(){
		return this.context.filterMovies
	}
	
	render() {
		return (
			<StyledLandingPage>
				{
                    this.returnMovies()?.map(movie=>
                        <MovieCard key={movie.id} data={movie}/>
                        )
                }
			</StyledLandingPage>
		);
	}
}

LandingPage.contextType = DataContext

export default LandingPage;
