import React, {Component} from 'react'
import {Movies as MovieData, Slots as SlotData} from '../components/Models/Models'
import {v4 as uuidv4} from 'uuid'
import getLocation from "../components/Models/Locator"

export const DataContext = React.createContext()

export default class DataContextProvider extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            movies: new MovieData().getMovies(),
            filterMovies: '',
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
            bookingID: null
        }

        this.slots = new SlotData()
    }

    backToPhase2 = () => {
        console.log("2")
    }

    backToPhase1 = () => {
        console.log("1")
    }

    addPopcorn = (popcorn) => {
        this.setState({popcorn})
    }
    
    setLocation = () => {
        let location = getLocation()
        this.getLocation({location})
    }

    dataChange4 = (popcorn) => {        
        this.setState({popcorn, phase: 4, bookingID: uuidv4()}, () => console.log(this.state))
    }

    dataChange3 = (seatSelect) => {
        this.setState({seatSelect, phase: 3, price: seatSelect.length * 125})
    }

    dataChange2 = (slotSelect) => {
        let slotDetails = this.slots.getSlotsByID(Number(slotSelect))
        this.setState({slotSelect, phase : 2, slotDetails}, () => console.log(this.state))
    }

    dataChange = (phase, movieSelect) => {
        let date = new Date()
        date = new Date(date.setDate(date.getDate() + 1))
        let dateSelect = this.destructureDate(date)
        let slotDisplay = this.slots.getAllSlotsBasedOnDateLocationMovie(dateSelect, this.state.location, movieSelect)
        this.setState({phase, movieSelect, dateSelect, slotDisplay}, () => console.log(this.state))
    }

    destructureDate = (date) => {
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        if(month <= 9) month = "0" + month
        let day = date.getDate()
        if(day <= 9) day = "0" + day
        let dateSelect = year + '/' + month + '/' + day
        return dateSelect
    }

    changeDate = (dateSelect) => {
        let slotDisplay = new SlotData().getAllSlotsBasedOnDateLocationMovie(dateSelect, this.state.location, this.state.movieSelect)
        this.setState({dateSelect, slotDisplay})
    }

    getSlots = (date) => {
        let slotDisplay = new SlotData().getAllSlotsBasedOnDateLocationMovie(this.state.dateSelect, this.state.location, this.state.movieSelect)
        this.setState({slotDisplay})
    }

    returnFilter = () => {
        console.log("here")
        let filter = this.state.filterMovies.trim().toLowerCase()
        if(filter.length > 0){
            return this.state.movies.filter(x => x.title.toLowerCase().startsWith(filter))
        }
        else{
            return this.state.movies
        }
    }

    updateFilter = (word) => {
        word = word.trim().toLowerCase()
        if(word !== this.state.filterMovies.toLowerCase()){
            this.setState({
                filterMovies: word
            })
        }
    }

    render(){
        const value = {...this.state, filterMovies: this.returnFilter(), updateFilter: this.updateFilter, 
                        dataChange: this.dataChange, destructureDate: this.destructureDate, changeDate: this.changeDate,
                        dataChange2: this.dataChange2, dataChange3: this.dataChange3, dataChange4: this.dataChange4,
                        addPopcorn: this.addPopcorn, backToPhase1: this.backToPhase1, backToPhase2: this.backToPhase2}
        return(
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}