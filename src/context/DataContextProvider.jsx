import React from "react";
import {
	Movies as MovieData,
	Slots as SlotData,
} from "../components/Models/Models";
import { v4 as uuidv4 } from "uuid";
// import getLocation from "../components/Models/Locator";

export const DataContext = React.createContext();

export default class DataContextProvider extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			movies: new MovieData().getMovies(),
			filterMovies: "",
			phase: 0,
			language: "English",
			location: "Bangalore",
			movieSelect: null,
			dateSelect: null,
			timeSelect: null,
			slotDisplay: null,
			slotDetails: null,
			slotSelect: null,
			seatSelect: [],
			popcorn: false,
			price: 0,
			bookingID: null,
		};

		this.slots = new SlotData();
	}

	addPopcorn = (popcorn) => {
		this.setState({ popcorn });
	};

	setLocation = async () => {
		// let location = await getLocation()
		let location = "Bengaluru"
		this.setState({ location });
	};

	dataChange4 = (popcorn) => {
        let {slotSelect, seatSelect} = this.state
        this.slots.modifySlotsAddBookedSeats(slotSelect, seatSelect)
		this.setState({ 
			popcorn, 
			phase: 4, 
			bookingID: uuidv4() 
		});
	};

	dataChange3 = (seatSelect) => {
		this.setState({ seatSelect, phase: 3, price: seatSelect.length * 125 });
	};

	dataChange2 = (slotSelect) => {
		let slotDetails = this.slots.getSlotsByID(Number(slotSelect));
		this.setState({ 
			slotSelect, 
			phase: 2, 
			slotDetails 
		});
	};

	dataChange1 = (movieSelect) => {
		this.setLocation();
		let date = new Date();
		date = new Date(date.setDate(date.getDate() + 1));
		let dateSelect = this.destructureDate(date);
		let slotDisplay = this.slots.getAllSlotsBasedOnDateLocationMovie(
			dateSelect,
			this.state.location,
			movieSelect
		);
		this.setState({ 
			phase: 1, 
			movieSelect, 
			dateSelect, 
			slotDisplay 
		});
	};

	setPhase0 = () => {
		this.setState({
			phase: 0,
			movieSelect: null,
			dateSelect: null,
			timeSelect: null,
			slotDisplay: null,
			slotDetails: null,
			slotSelect: null,
			seatSelect: [],
			popcorn: false,
			price: 0,
			bookingID: null,
		});
	};

	setPhase1 = () => {
		if (this.state.phase > 1)
			this.setState({
				phase: 1,
				slotDetails: null,
				slotSelect: null,
				seatSelect: [],
				popcorn: false,
				price: 0,
				bookingID: null,
			});
	};

	setPhase2 = () => {
		if (this.state.phase > 2)
			this.setState({
				phase: 2,
				popcorn: false,
				price: 0,
				bookingID: null,
			});
	};


	destructureDate = (date) => {
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		if (month <= 9) month = "0" + month;
		let day = date.getDate();
		if (day <= 9) day = "0" + day;
		let dateSelect = year + "/" + month + "/" + day;
		return dateSelect;
	};

	locationChange = (e) => {
		let location = e.target.value;
		let slotDisplay = this.slots.getAllSlotsBasedOnDateLocationMovie(
			this.state.dateSelect,
			location,
			this.state.movieSelect
		);
		this.setState({ location, slotDisplay });
	};

	changeDate = (dateSelect) => {
		let slotDisplay = this.slots.getAllSlotsBasedOnDateLocationMovie(
			dateSelect,
			this.state.location,
			this.state.movieSelect
		);
		this.setState({ dateSelect, slotDisplay });
	};

	getSlots = () => {
		let slotDisplay = this.slots.getAllSlotsBasedOnDateLocationMovie(
			this.state.dateSelect,
			this.state.location,
			this.state.movieSelect
		);
		this.setState({ slotDisplay });
	};

	returnFilter = () => {
		let filter = this.state.filterMovies.trim().toLowerCase();
		if (filter.length > 0) {
			return this.state.movies.filter((x) =>
				x.title.toLowerCase().startsWith(filter)
			);
		} else {
			return this.state.movies;
		}
	};

	updateFilter = (word) => {
		word = word.trim().toLowerCase();
		if (word !== this.state.filterMovies.toLowerCase()) {
			this.setState({
				filterMovies: word,
			});
		}
	};

	render() {
		const value = {
			...this.state,
			filterMovies: this.returnFilter(),
			updateFilter: this.updateFilter,
			dataChange1: this.dataChange1,
			destructureDate: this.destructureDate,
			changeDate: this.changeDate,
			dataChange2: this.dataChange2,
			dataChange3: this.dataChange3,
			dataChange4: this.dataChange4,
			setPhase0: this.setPhase0,
			setPhase1: this.setPhase1,
			setPhase2: this.setPhase2,
			addPopcorn: this.addPopcorn,
			setLocation: this.setLocation,
			locationChange: this.locationChange,
		};
		return (
			<DataContext.Provider value={value}>
				{this.props.children}
			</DataContext.Provider>
		);
	}
}
