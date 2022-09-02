// assets
import { ReactComponent as HolesPlayedIcon } from '../Assets/Icons/hole-solid-icon.svg'
import { ReactComponent as CourseIcon } from '../Assets/Icons/location-solid-icon.svg'
import { ReactComponent as DateIcon } from '../Assets/Icons/calendar-solid-icon.svg'

// libraries/helpers
import { renderFrontTableHeader, renderFrontParRow, renderFrontScoreRow } from '../Helpers/ScorecardTableComponents'

// styling
import '../styling/components/Scorecard.scss'

const Scorecard = (props) => {

    const renderFrontNine = () => {

        return(
            <table className='front'>
                <thead>
                    <tr>{ renderFrontTableHeader(props.holes) }</tr>
                </thead>
                <tbody>
                    <tr>{ renderFrontParRow(props.holes) }</tr>
                    <tr>{ renderFrontScoreRow(props.holes) }</tr>
                </tbody>
            </table>
        )
        // return "there is a front 9"
    }

    const renderBackNine = () => {
        return "there is a back 9"
    }

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
            <div className="body">
                { 
                    props.holes
                        ?
                            renderFrontNine()
                        :
                            "No stats were recorded"
                }
                { 
                    (props.holes && props.holesPlayed === 18)
                        ?
                            renderBackNine()
                        :
                            null
                }
                <table className='back'>
                    <thead>
                        <tr>
                            <td>Hole</td>
                            <td>10</td>
                            <td>11</td>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                            <td>In</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Par</td>
                            <td>5</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>3</td>
                            <td>4</td>
                            <td>3</td>
                            <td>5</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>6</td>
                            <td>4</td>
                            <td>5</td>
                            <td>5</td>
                            <td>4</td>
                            <td>4</td>
                            <td>4</td>
                            <td>3</td>
                            <td>5</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Scorecard