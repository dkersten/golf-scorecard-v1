// import { Link } from 'react-router-dom'
// components
import { ReactComponent as DefaultIcon } from '../Assets/Icons/horizontal-dots.svg'
import ResuableModal from "../Components/Modal"
import Scorecard from '../Components/Scorecard'

// libraries/helpers
import {useState } from 'react'

// data
import scorecards from "../Temp Data/scoresData"

const RenderIcon = (props) => {
    
    const [modalShow, setModalShow] = useState(false)

    const launchScorecardModal = (roundId) => {
        // alert(roundId)
        const scores = scorecards.scores
        console.log(scores)
        // setModalShow(true)
    }

    const displayIcon = (iconInfo, roundId) => {
        if (iconInfo.icon && iconInfo.link) {
            // return(<Link to={iconInfo.link}>{iconInfo.icon}</Link>)
            return(<button onClick={() => launchScorecardModal(roundId)}>{iconInfo.icon}</button>)
        } else if (iconInfo.icon) {
            return iconInfo.icon
        } else if (iconInfo.link) {
                // return <Link to={iconInfo.link}><DefaultIcon /></Link>
                return <button onClick={() => launchScorecardModal(roundId)}><DefaultIcon /></button>
        } else {
                return <DefaultIcon />
        }
    }
    
    return(
        <>
            {displayIcon(props.icon, props.roundId)}
            <ResuableModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Scorecard"
                scorecard={
                    <Scorecard
                    date="7/20/20"
                    holesPlayed={9}
                    score={40}
                    course="Brighton Park GC"
                    stats={true}
                    holeByHole={true}
                    advancedStats={true}
                    holes={{
                        10: {
                            par: 5,
                            score: 5,
                            fir: true,
                            gir: true,
                            putts: 2
                        },
                        11: {
                            par: 4,
                            score: 5,
                            fir: null,
                            gir: false,
                            putts: 2
                        },
                        12: {
                            par: 4,
                            score: 4,
                            fir: "left",
                            gir: false,
                            putts: 1
                        },
                        13: {
                            par: 4,
                            score: 6,
                            fir: true,
                            gir: true,
                            putts: 2
                        },
                        14: {
                            par: 4,
                            score: 4,
                            fir: "right",
                            gir: false,
                            putts: 2
                        },
                        15: {
                            par: 3,
                            score: 3,
                            fir: true,
                            gir: true,
                            putts: 2
                        },
                        16: {
                            par: 4,
                            score: 5,
                            fir: "left",
                            gir: true,
                            putts: 3
                        },
                        17: {
                            par: 3,
                            score: 3,
                            fir: null,
                            gir: false,
                            putts: 1
                        },
                        18: {
                            par: 5,
                            score: 5,
                            fir: true,
                            gir: true,
                            putts: 3
                        }
                    }}
                />
                }
            />
        </>
    )
}

export default RenderIcon