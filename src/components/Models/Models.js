import movie from "../../DATA/movie";
import categories from "../../DATA/categories";
import bookings from "../../DATA/booking";
import cinemas from "../../DATA/cinema";
import slots from "../../DATA/slot";

export class Movies {
	constructor() {
		let local = localStorage.getItem("movies");
		this.moviesDB = local ? JSON.parse(local) : movie;
	}

	getMovies() {
		const query = this.moviesDB.map(({ id, title, image, language, rating }) => {
			let calculatedRating = (
				rating.reduce((a, e) => a + e, 0) / rating.length
			).toFixed(1);

			return {
				id,
				title,
				image,
				language,
				rating: calculatedRating,
			};
		});

		return query;
	}
	getMovieById(id) {
		return this.moviesDB.find((movie) => movie.id === id);
	}

	inistialUpdateToAPI() {
		// update the values to API.
	}

	getSlotsFromMovieIDnadLocation() {
		// return slots based on movoe id and location
	}
}

export class Slots {
	constructor() {
		let local = localStorage.getItem("slots");
		this.slotsDB = local ? JSON.parse(local) : slots;
	}

	inistialUpdateToAPI() {
		// update the values to API.
	}

	updateToAPI() {
		// update the values to API.
	}

	getAllSlotsBasedOnDateLocationMovie(date, location, movie_id) {
		// return slots based on date - return from context API
		let groupSlots = {};
		this.slotsDB.forEach((slot) => {
			const cinema = new Cinema().getCinemaByID(slot.cinema_id);
			let today = new Date();
			const slotDate = new Date(today.setDate(today.getDate() + slot.date + 1));
			let checkLine =
				cinema.location.toLowerCase() === location.toLowerCase() &&
				slot.movie_id === movie_id &&
				date === this.destructureDate(slotDate)
			if (checkLine) {
				let payload = { id: slot.id, time: slot.time };
				if (groupSlots[cinema.theatre]) groupSlots[cinema.theatre].push(payload);
				else groupSlots[cinema.theatre] = [payload];
			}
        });

		return groupSlots;
	}


	destructureDate(date){
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		if (month <= 9) month = "0" + month;
		let day = date.getDate();
		if (day <= 9) day = "0" + day;
		let dateSelect = year + "/" + month + "/" + day;
		return dateSelect;
	}

	getAllSlotsOnAndAfterDate(date) {
		// return slots on and after the date - return from context API
	}

	getSlotsByID(id) {
        let res = this.slotsDB.filter(x => x.id === id)
        if(res.length > 0){
            return res[0]
        }
        else{
            return null
        } 
	}

	modifySlotsAddBookedSeats(id, bookedSeats ) {
        let slot = this.getSlotsByID(id)
        slot.seats_booked.push(...bookedSeats)
        localStorage.setItem("slots", JSON.stringify(this.slotsDB))
        // modify slots and return to API
	}
}

export class Cinema {
	constructor() {
		let local = localStorage.getItem("cinemas");
		this.cinemasDB = local ? JSON.parse(local) : cinemas;
	}

	inistialUpdateToAPI() {
		// update the values to API.
	}

	getAllCinemaFromLocation(location) {
		// return ciname based on location details
	}

	getAllCinemas() {
		return this.cinemas;
	}

	getCinemaByID(id) {
		return this.cinemasDB.find((cinema) => cinema.id === id);
	}
}

export class Bookings {
	constructor() {
		this.bookings = bookings;
	}

	inistialUpdateToAPI() {
		// update the values to API.
	}

	getAllBookings() {
		// needs to be extracted from Context API since booking details can change
	}

	getBookingFromID(id) {
		// get booking details based on ID -> this should not be extracted from context API
	}

	addBooking(id, slot_id, email, popcorn, price, seats) {
        
        // to be added to context API
		// must update the slots seats based on slot ID. - see modifySlotsSlotsByID method.
	}
}

export class Categories {
	constructor() {
		this.categories = categories;
	}

	inistialUpdateToAPI() {
		// update the values to API.
	}

	getCategories() {
		// return keys of categories - front, back, middle.
	}

	getFrontMin() {
		// return min value of the front row
	}

	getFrontMax() {
		// return max value of the front row
	}

	getMiddleMin() {
		// return min value of the middle row
	}

	getMiddleMax() {
		// return max value of the middle row
	}

	getBackMin() {
		// return min value of the back row
	}

	getBackMax() {
		// return minimum value of the back row
	}
}
