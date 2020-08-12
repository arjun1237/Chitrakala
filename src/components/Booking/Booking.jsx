import React, {Component} from 'react'
import colors from '../../styling/theme'
import styled from 'styled-components'
import DateTimeSelection from './DateTimeSelection'

export default class Booking extends Component{
    render(){
        return(
            <BookingContainer>
                <div>
                    <Phases />
                    <PhaseBody>
                        <DateTimeSelection />
                    </PhaseBody>
                </div>
            </BookingContainer>
        )
    }
}


function Phases(){
    return(
        <PhaseHandler>
            <PhaseBall bg={colors.themeSuccess} />
            <PhaseLine />
            <PhaseBall />
            <PhaseLine />
            <PhaseBall />
            <PhaseLine />
            <PhaseBall />
        </PhaseHandler>
    )
}


const PhaseBody = styled.div`
    padding: 30px;
`

const PhaseLine = styled.div`
    width: 80px;
    height: 11px;
    background-color: ${colors.themeSuccess};
    margin: 0px -1px;
`

const PhaseHandler = styled.div`
    display: flex;
    align-items: center;
`

const PhaseBall = styled.div`
    height: 60px;
    width: 60px;
    border-radius: 32px;
    border: 3px solid ${colors.themeSuccess};
    background-color: ${props => props.bg};
`

const BookingContainer = styled.div`
    display: grid;
    place-items: center;
    height: 80vh;
`