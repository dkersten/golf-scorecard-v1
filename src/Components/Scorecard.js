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
            <div className="body">
                <table className='front'>
                    <thead>
                        <tr>
                            <td>Hole</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                            <td>5</td>
                            <td>6</td>
                            <td>7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>In</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Par</td>
                            <td>4</td>
                            <td>3</td>
                            <td>5</td>
                            <td>4</td>
                            <td>4</td>
                            <td>5</td>
                            <td>4</td>
                            <td>3</td>
                            <td>4</td>
                            <td>36</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>5</td>
                            <td>3</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>5</td>
                            <td>3</td>
                            <td>4</td>
                            <td>40</td>
                        </tr>
                    </tbody>
                </table>
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