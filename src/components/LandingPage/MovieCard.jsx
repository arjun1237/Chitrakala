import React from "react";
import { StyledMovieCard } from "../../styling/StyledLandingPageComponents";

function MovieCard(props){
	const {image, title, language} = props.data;
	return (
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
			<div className="bookButton">Book Now</div>
		</StyledMovieCard>
	);
}

export default MovieCard;
