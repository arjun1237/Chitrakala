import movie from '../../JSON/movie.json'
import categories from '../../JSON/categories.json'
import bookings from '../../JSON/booking.json'
import cinemas from '../../JSON/cinema.json'
import slots from '../../JSON/slot.json'

export class Movies{
    constructor(){
        this.movies = movie
    }

    getMovies(){
        return this.movies;
    }

    inistialUpdateToAPI(){
        // update the values to API.
    }

    getSlotsFromMovieIDnadLocation(){
        // return slots based on movoe id and location
    }

}

export class Slots{
    constructor(){
        this.slots = slots
    }

    inistialUpdateToAPI(){
        // update the values to API.
    }

    updateToAPI(){
        // update the values to API.
    }

    getAllSlotsBasedOnDate(date){
        // return slots based on date - return from context API
    }

    getAllSlotsOnAndAfterDate(date){
        // return slots on and after the date - return from context API
    }

    getSlotsByID(id){
        // return slots by ID - return from context API
    }

    modifySlotsByID(id){
        // modify slots and return to API
    }
}

export class Cinema{
    constructor(){
        this.cinemas = cinemas
    }

    inistialUpdateToAPI(){
        // update the values to API.
    }

    getAllCinemaFromLocation(location){
        // return ciname based on location details
    }

    getAllCinemas(){
        return this.cinemas;
    }

    getCinemaByID(id){
        // return cinema based on id
    }
}

export class Bookings{
    constructor(){
        this.bookings = bookings
    }

    inistialUpdateToAPI(){
        // update the values to API.
    }

    getAllBookings(){
        // needs to be extracted from Context API since booking details can change
    }

    getBookingFromID(id){
        // get booking details based on ID -> this should not be extracted from context API
    }

    addBooking(id, slot_id, email, popcorn, price, seats){
        // to be added to context API
        // must update the slots seats based on slot ID. - see modifySlotsSlotsByID method.
    }
}

export class Categories{
    constructor(){
        this.categories = categories
    }

    inistialUpdateToAPI(){
        // update the values to API.
    }

    getCategories(){
        // return keys of categories - front, back, middle.
    }

    getFrontMin(){
        // return min value of the front row
    }

    getFrontMax(){
        // return max value of the front row
    }

    getMiddleMin(){
        // return min value of the middle row
    }

    getMiddleMax(){
        // return max value of the middle row
    }

    getBackMin(){
        // return min value of the back row
    }

    getBackMax(){
        // return minimum value of the back row
    }
}