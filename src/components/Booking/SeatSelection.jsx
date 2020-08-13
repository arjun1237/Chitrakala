import React, {Component} from 'react'
import styled from 'styled-components'
import colors from '../../styling/theme'
import {DataContext} from '../../context/DataContextProvider'

export default class SeatSelection extends Component{

    constructor(props){
        super(props)

        this.state = {
            seatsSelect: []
        }
    }

    getSeats = (seatsBooked) => {
        let x = 1
        let out = []
        for(let i=0; i<10; i++){
            for(let j=0; j<10; j++){
                out.push([x, seatsBooked.includes(x) ? 1 : (this.state.seatsSelect.includes(x) ? 2 : 3)])
                x++
            }
        }
        return out
    }

    selectSeat  = (seat) => {
        console.log(seat)
        let payload = [...this.state.seatsSelect]
        payload.push(Number(seat))
        this.setState({seatsSelect: payload})
    }

    render(){
        let {slotDetails} = this.context
        let seatsBooked = slotDetails.seats_booked
        let seats = this.getSeats(seatsBooked)
        let m = -1
        return(
            <div>
                <CinemaHandler> SCREEN THIS WAY </CinemaHandler>
                <SeatHandler>
                    {[...Array(10).keys()].map(x => 
                        <SeatRow>
                            {[...Array(10).keys()].map((y, j) => <Seat select={seats[++m][1]} key={m} > <div style={{width: "100%", display: "flex", justifyContent: "center"}} onClick={() => this.selectSeat(y === 10 ? (x + "0") : (x + "" + (y+1)))}> {seats[m][0]} </div></Seat>)}
                        </SeatRow>)}
                </SeatHandler>
                <div style={{display: "flex"}}>
                    <Button onClick={() => this.context.dataChange3(this.state.seatsSelect)}>PROCEED</Button>
                </div>
            </div>
        )
    }
}

SeatSelection.contextType = DataContext

const Button = styled.button`
    background-color: ${colors.themeMain};
    color: #f5dcd7;
    border: none;
    font-weight: 600;
    letter-spacing: 1px;
    padding: 7px 25px;
    text-align: center;
    margin: auto;
    border-radius: 2px;
    cursor: pointer;

    &:focus{
        outline: none;
    }

    &:active{
        background-color: red;
    }
`

const SeatRow = styled.div`
    display : flex;
    justify-content: space-around;
`

const SeatHandler = styled.div`
    padding: 20px;
`

const Seat = styled.div`

    // for booking seats
    ${props => props.select === 2 && ` 
        background-color: ${colors.textSuccess};
        border: 2px solid ${colors.textSuccess};
        color: white; 
        cursor: pointer;`
    }

    // for not available seats
    ${props => props.select === 1 && ` 
        background-color: white;
        border: 2px solid #bfbfbf;
        color: #bfbfbf;`    
    }

    // for available seats
    ${props => props.select === 3 && ` 
        background-color: white;
        border: 2px solid ${colors.textSuccess};
        color: ${colors.textSuccess};
        cursor: pointer;`
    }

    display: grid;
    place-items: center;
    height: 19px;
    width: 35px;
    margin: 2px;
    font-size: 12px;
    border-radius: 2px;
    font-weight: 600;

    &:hover{
        // only for available
        ${props => props.select === 3 && ` 
            background-color: #208c62;
            color: white;`    
        }
    }
`

const CinemaHandler = styled.div`
    background-color: white;
    text-align: center;
    font-weight: 600;
    padding: 10px;
    color: ${colors.textSecondary};
    border-top: 2px solid lightgray;
    border-right: 2px solid lightgray;
    border-left: 2px solid lightgray;
`