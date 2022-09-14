// import { Link } from 'react-router-dom'
// components
import { ReactComponent as DefaultIcon } from '../Assets/Icons/horizontal-dots.svg'
import ResuableModal from "../Components/Modal"

// libraries/helpers
import {useState } from 'react'

// data
import scorecards from "../Temp Data/scoresData"

const launchScorecardModal = () => {
    alert("ahhhh")
}

const RenderIcon = (props) => {
    console.log(props.icon)
    const displayIcon = (iconInfo, roundId) => {
        if (iconInfo.icon && iconInfo.link) {
            // return(<Link to={iconInfo.link}>{iconInfo.icon}</Link>)
            return(<button onClick={launchScorecardModal}>{iconInfo.icon}</button>)
        } else if (iconInfo.icon) {
            return iconInfo.icon
        } else if (iconInfo.link) {
                // return <Link to={iconInfo.link}><DefaultIcon /></Link>
                return <button onClick={launchScorecardModal}><DefaultIcon /></button>
        } else {
                return <DefaultIcon />
        }
    }
    
    return(
        <>
            {displayIcon(props.icon, props.roundId)}
        </>
    )
}

export default RenderIcon