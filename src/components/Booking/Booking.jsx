import React, {Component} from 'react'
import colors from '../../styling/theme'
import styled from 'styled-components'
import DateTimeSelection from './DateTimeSelection'
import SeatSelection from './SeatSelection'
import ConfirmationPage from './ConformationPage'
import SummaryPage from './SummaryPage'
import {DataContext} from '../../context/DataContextProvider'

export default class Booking extends Component{
    render(){
        const {phase,setPhase1,setPhase2} = this.context
        let phRender = <DateTimeSelection />
        switch(phase){
            case 2: phRender = <SeatSelection />
                    break;
            case 3: phRender = <SummaryPage />  
                    break;
            case 4: phRender = <ConfirmationPage/> 
                    break;
            default: break
        }
        return(
            <BookingContainer>
                <div>
                    <Phases phase={phase} setPhase1={phase!==4 && setPhase1} setPhase2={phase!==4 && setPhase2}/>
                    <PhaseBody>   
                        {phRender}
                    </PhaseBody>                    
                </div>
            </BookingContainer>
        )
    }
}

Booking.contextType = DataContext


function Phases({phase, setPhase1,setPhase2}){
    return(
        <PhaseHandler>
            <PhaseBall bg={phase >= 1 && colors.themeSuccess} onClick={setPhase1}/>
            <PhaseLine />
            <PhaseBall bg={phase >= 2 && colors.themeSuccess} onClick={setPhase2} />
            <PhaseLine />
            <PhaseBall bg={phase >= 3 && colors.themeSuccess} />
            <PhaseLine />
            <PhaseBall bg={phase >= 4 && colors.themeSuccess} />
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
    margin: auto;
    width: fit-content;
`

const PhaseBall = styled.div`
    height: 40px;
    width: 40px;
    border-radius: 21px;
    border: 3px solid ${colors.themeSuccess};
    background-color: ${props => props.bg};
    cursor: ${props => props.bg ? "pointer" : "" };
`

const BookingContainer = styled.div`
    margin: auto;
    width: 70%;
    height: 80vh;
    margin-top: 30px;
`