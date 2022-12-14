// assets
import { ReactComponent as HolesPlayedIcon } from '../Assets/Icons/hole-solid-icon.svg'
import { ReactComponent as CourseIcon } from '../Assets/Icons/location-solid-icon.svg'
import { ReactComponent as DateIcon } from '../Assets/Icons/calendar-solid-icon.svg'

// libraries/helpers
import { renderScorecardTableHeader, renderScorecardTableBodyRow, renderFairwaysInReg, renderGreensInReg, renderPutts } from '../Helpers/ScorecardTableComponents'

// styling
import '../styling/components/Scorecard.scss'

const Scorecard = (props) => {

    const renderAdvancedStats = (statType, startingHole) => {
        if (statType === "fir") {
            return(
                props.advancedStats
                    ?
                        <tr>{ renderFairwaysInReg(props.holes, startingHole) }</tr>
                    :
                        null
            )
        } else if (statType === "gir") {
            return(
                props.advancedStats
                    ?
                        <tr>{ renderGreensInReg(props.holes, startingHole) }</tr>
                    :
                        null
            )
        } else if (statType === "putts") {
            return(
                props.advancedStats
                    ?
                        <tr>{ renderPutts(props.holes, startingHole) }</tr>
                    :
                        null
            )
        }
    }

    const renderFrontNine = () => {
        let startingHole = Object.keys(props.holes)[0]
        startingHole = parseInt(startingHole)

        // get array of holes
        let holeArr = Object.keys(props.holes)
        holeArr = holeArr.slice(0, 9)
        
        // convert all hole keys to numbers
        holeArr = holeArr.map(index => {
            return parseInt(index)
        })

        return(
            <table className='front'>
                <thead>
                    <tr>{ renderScorecardTableHeader(props.holes, holeArr) }</tr>
                </thead>
                <tbody>
                    <tr>{ renderScorecardTableBodyRow(props.holes, startingHole, "par") }</tr>
                    <tr>{ renderScorecardTableBodyRow(props.holes, startingHole, "score") }</tr>
                    { renderAdvancedStats("fir", startingHole) }
                    { renderAdvancedStats("gir", startingHole) }
                    { renderAdvancedStats("putts", startingHole) }
                </tbody>
            </table>
        )
    }

    const renderBackNine = () => {
        // get starting hole
        let startingHole = Object.keys(props.holes)[9]
        startingHole = parseInt(startingHole)

        // get array of holes
        let holeArr = Object.keys(props.holes)
        holeArr = holeArr.slice(9, 18)
        
        // convert all hole keys to numbers
        holeArr = holeArr.map(index => {
            return parseInt(index)
        })
        
        return(
            <table className='front'>
                <thead>
                    <tr>{ renderScorecardTableHeader(props.holes, holeArr) }</tr>
                </thead>
                <tbody>
                    <tr>{ renderScorecardTableBodyRow(props.holes, startingHole, "par") }</tr>
                    <tr>{ renderScorecardTableBodyRow(props.holes, startingHole, "score") }</tr>
                    { renderAdvancedStats("fir", startingHole) }
                    { renderAdvancedStats("gir", startingHole) }
                    { renderAdvancedStats("putts", startingHole) }
                </tbody>
            </table>
        )
    }

    return(
        <div className="scorecard">
            <div className="header">
                <div className="score-container">
                    <div className="score">
                        <span>Total Score: { props.score }</span>
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
                            <p className='no-stats'>No stats were recorded</p>
                }
                { 
                    (props.holes && props.holesPlayed === 18)
                        ?
                            renderBackNine()
                        :
                            null
                }
            </div>
        </div>
    )
}

export default Scorecard