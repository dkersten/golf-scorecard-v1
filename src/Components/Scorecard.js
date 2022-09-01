// assets
import { ReactComponent as HolesPlayedIcon } from '../Assets/Icons/hole-solid-icon.svg'
import { ReactComponent as CourseIcon } from '../Assets/Icons/location-solid-icon.svg'
import { ReactComponent as DateIcon } from '../Assets/Icons/calendar-solid-icon.svg'

// styling
import '../styling/components/Scorecard.scss'

const Scorecard = (props) => {
    return(
        <div className="scorecard">
            <div className="header">
                <div className="score-container">
                    <div className="score">
                        <span>{ props.score }</span>
                    </div>
                </div>
                <div className="info-container">
                    <div className="flex-container">
                        <div className="flex-item-container">
                            <HolesPlayedIcon alt="Holes Played:" />
                            <p>{ props.holesPlayed }</p>
                        </div>
                        <div className="flex-item-container">
                            <DateIcon alt="Date:" />
                            <p>{ props.date }</p>
                        </div>
                        <div className="flex-item-container">
                            <CourseIcon alt="Course:" />
                            <p>{ props.course }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scorecard