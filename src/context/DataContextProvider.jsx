import React, {Component} from 'react'
import {Movies as MovieData} from '../components/Models/Models'

export const DataContext = React.createContext()

export default class DataContextProvider extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            movies: new MovieData().getMovies(),
            filterMovies: '',
            phase: 0
        }
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
        const value = {...this.state, filterMovies: this.returnFilter(), updateFilter: this.updateFilter}
        return(
            <DataContext.Provider value={value}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}