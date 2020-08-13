import React, {Component} from 'react'
import styled from 'styled-components'
import colors from '../../styling/theme'
import {DataContext} from '../../context/DataContextProvider'

export default class SeatSelection extends Component{
    render(){
        return(
            <div>
                <CinemaHandler> SCREEN THIS WAY </CinemaHandler>
                <SeatHandler>
                    {[...Array(10).keys()].map(x => 
                        <SeatRow>                        
                            {[...Array(10).keys()].map(y => <Seat>{y < 9 ?  x + '' + (y+1) : (x+1 + '0')}</Seat>)}
                        </SeatRow>)}                                 
                </SeatHandler>
                <div style={{display: "flex"}}>
                    <Button>PROCEED</Button>
                </div>
            </div>
        )
    }
}

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
    background-color: ${colors.textSuccess};
    border: 1px solid ${colors.textSuccess};
    color: white;

    // for not available seats
    // background-color: white;
    // border: 1px solid #bfbfbf;
    // color: #bfbfbf;

    // for available seats
    // background-color: white;
    // border: 1px solid ${colors.textSuccess};
    // color: ${colors.textSuccess};

    display: grid;
    place-items: center;
    height: 19px;
    width: 35px;
    margin: 5px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 2px;
    font-weight: 600;

    &:hover{
        // only for available and selected seats
        background-color: #208c62;
        color: white;
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