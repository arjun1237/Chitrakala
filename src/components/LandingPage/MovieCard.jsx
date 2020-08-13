import React from "react";
import { StyledMovieCard } from "../../styling/StyledLandingPageComponents";
import {DataContext} from '../../context/DataContextProvider'

function MovieCard(props){
	const {image, title, language, id} = props.data;
	return (
		<DataContext.Consumer>
			{({dataChange}) => 
				(
					<StyledMovieCard>
						<div
							className="image"
							style={{
								backgroundImage:
									`url('${image}')`,
							}}
						></div>
						<div className="content">
							<div className="name">{title}</div>
							<div className="language">{language}</div>
						</div>
						<button className="bookButton" onClick={() => dataChange(1, id)}>Book Now</button>
					</StyledMovieCard>
				)			
			}
		</DataContext.Consumer>
	);
}

export default MovieCard;
