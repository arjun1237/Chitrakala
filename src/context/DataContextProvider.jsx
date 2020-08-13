import React, {Component} from 'react'
import {Movies as MovieData, Slots as SlotData} from '../components/Models/Models'

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
            slotSelect: null,
            seatSelect: [],
            seatNotDisplay: [],
            popcorn: false,
            price: 0,
            bookingID: null
        }
    }

    dataChange2 = (id) => {
        console.log(id)
    }

    dataChange = (phase, movieSelect) => {
        let date = new Date()
        date = new Date(date.setDate(date.getDate() + 1))
        let dateSelect = this.destructureDate(date)
        let slotDisplay = new SlotData().getAllSlotsBasedOnDateLocationMovie(dateSelect, this.state.location, movieSelect)
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
                        dataChange2: this.dataChange2}
        return(
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}