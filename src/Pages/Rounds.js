// components
import Layout from "../Layout"
import CardOverview from "../Components/CardOverview"
import Table from "../Components/Table"
import SelectWithState from "../Components/SelectWithState"
import LineGraph from "../Components/LineGraph"
import Modal from "../Components/Modal"
import Button from 'react-bootstrap/Button'
import Scorecard from "../Components/Scorecard"

// data
import rounds from "../Temp Data/updatedRoundsData"

// libraries/helpers
import { useState } from "react"

// assets
import { ReactComponent as StatsIcon } from '../Assets/Icons/mixed-char-icon.svg'
import { ReactComponent as GolfClubIcon} from '../Assets/Icons/golf-club-light-icon.svg'
import { ReactComponent as GolfHoleIcon } from '../Assets/Icons/golf-hole-light-icon.svg'
import { ReactComponent as GolfballTeeIcon } from '../Assets/Icons/golfball-tee-light-icon.svg'

const Rounds = () => {

    const [modalShow, setModalShow] = useState(false)

    let currentYear = new Date().getFullYear()
    currentYear = currentYear.toString()
    const [yearChoice, setYearChoice] = useState(currentYear)

    const SelectOptions = (rounds) => {
        const optionsObj = {}
        for (const [key, val] of Object.entries(rounds)) {
            optionsObj[key] = val.displayName
        }
        return optionsObj
    }

    return(
        <Layout>
            <div style={{ marginBottom: '4rem'}}>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Open Modal
            </Button>
            </div>
            <div className="year-selector-section">
                <SelectWithState
                    selectValue="Year: "
                    selectId={"yearSelect"}
                    defaultVal={yearChoice}
                    currentState={yearChoice}
                    setCurrentState={setYearChoice}
                    optionsItems={SelectOptions(rounds)}
                />
            </div>
            <div className="overview-section">
                <div className="card-container">
                    <ul>
                        <CardOverview 
                            icon={<GolfClubIcon />}
                            headline="Rounds Played"
                            data={rounds[yearChoice].roundsPlayed}
                        />
                        <CardOverview 
                            icon={<GolfballTeeIcon />} 
                            headline="Holes Played"
                            data={rounds[yearChoice].holesPlayed}
                        />
                        <CardOverview 
                            icon={<GolfHoleIcon />} 
                            headline="Courses Played"
                            data={rounds[yearChoice].coursesPlayed}
                        />
                    </ul>
                </div>
            </div>
            <div className="graph-section">
                <div className="flex-container">
                    <div className="flex-item">
                        <LineGraph
                            graphData={rounds[yearChoice].graphDataRounds}
                            graphCaption="Rounds Played"
                            dataKey="rounds"
                        />
                    </div>
                    <div className="flex-item">
                        <LineGraph
                            graphData={rounds[yearChoice].graphDataHoles}
                            graphCaption="Holes Played"
                            dataKey="holes"
                        />
                    </div>
                </div>
            </div>
            <Table
                bodyData={rounds[yearChoice].rounds}
                headerColumns={["#", "Date", "Course", "Holes Played", "Stats"]}
                classList={["rounds-table"]}
                iconInfo={{
                    icon: <StatsIcon />,
                    link: "#"
                }}
                hideIndex={false}
                fullTable={false}
            />
            
            
            <div style={{marginTop: '3rem', display: "flex", alignItems: 'center', flexDirection: 'column'}} className="overview-section">
                {/* <Scorecard
                    date="8/19/22"
                    holesPlayed={9}
                    score={41}
                    course="Churchville GC"
                    stats={false}
                    holeByHole={false}
                    advancedStats={false}
                />
                <Scorecard
                    date="6/12/22"
                    holesPlayed={18}
                    score={80}
                    course="Brighton Park GC"
                    stats={true}
                    holeByHole={true}
                    advancedStats={false}
                    holes={{
                        1: {
                            par: 4,
                            score: 5
                        },
                        2: {
                            par: 3,
                            score: 3
                        },
                        3: {
                            par: 5,
                            score: 5
                        },
                        4: {
                            par: 4,
                            score: 5
                        },
                        5: {
                            par: 4,
                            score: 5
                        },
                        6: {
                            par: 5,
                            score: 5
                        },
                        7: {
                            par: 4,
                            score: 5
                        },
                        8: {
                            par: 3,
                            score: 3
                        },
                        9: {
                            par: 4,
                            score: 4
                        },
                        10: {
                            par: 5,
                            score: 6
                        },
                        11: {
                            par: 4,
                            score: 4
                        },
                        12: {
                            par: 4,
                            score: 5
                        },
                        13: {
                            par: 4,
                            score: 5
                        },
                        14: {
                            par: 4,
                            score: 4
                        },
                        15: {
                            par: 3,
                            score: 4
                        },
                        16: {
                            par: 4,
                            score: 4
                        },
                        17: {
                            par: 3,
                            score: 3
                        },
                        18: {
                            par: 5,
                            score: 5
                        }
                    }}
                />
                <Scorecard
                    date="4/20/21"
                    holesPlayed={9}
                    score={39}
                    course="Brighton Park GC"
                    stats={true}
                    holeByHole={true}
                    advancedStats={true}
                    holes={{
                        1: {
                            par: 4,
                            score: 4,
                            fir: true,
                            gir: true,
                            putts: 2
                        },
                        2: {
                            par: 3,
                            score: 4,
                            fir: null,
                            gir: false,
                            putts: 2
                        },
                        3: {
                            par: 5,
                            score: 5,
                            fir: "left",
                            gir: false,
                            putts: 1
                        },
                        4: {
                            par: 4,
                            score: 4,
                            fir: true,
                            gir: true,
                            putts: 2
                        },
                        5: {
                            par: 4,
                            score: 5,
                            fir: "right",
                            gir: false,
                            putts: 2
                        },
                        6: {
                            par: 5,
                            score: 5,
                            fir: true,
                            gir: true,
                            putts: 2
                        },
                        7: {
                            par: 4,
                            score: 5,
                            fir: "left",
                            gir: true,
                            putts: 3
                        },
                        8: {
                            par: 3,
                            score: 3,
                            fir: null,
                            gir: false,
                            putts: 1
                        },
                        9: {
                            par: 4,
                            score: 4,
                            fir: true,
                            gir: true,
                            putts: 3
                        }
                    }}
                />
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
                <Scorecard
                    date="6/2/20"
                    holesPlayed={18}
                    score={85}
                    course="Terry Hills GC"
                    stats={true}
                    holeByHole={true}
                    advancedStats={false}
                    holes={{
                        10: {
                            par: 4,
                            score: 9
                        },
                        11: {
                            par: 3,
                            score: 3
                        },
                        12: {
                            par: 5,
                            score: 5
                        },
                        13: {
                            par: 4,
                            score: 5
                        },
                        14: {
                            par: 4,
                            score: 5
                        },
                        15: {
                            par: 5,
                            score: 5
                        },
                        16: {
                            par: 4,
                            score: 5
                        },
                        17: {
                            par: 3,
                            score: 3
                        },
                        18: {
                            par: 4,
                            score: 4
                        },
                        19: {
                            par: 5,
                            score: 7
                        },
                        20: {
                            par: 4,
                            score: 4
                        },
                        21: {
                            par: 4,
                            score: 5
                        },
                        22: {
                            par: 4,
                            score: 5
                        },
                        23: {
                            par: 4,
                            score: 4
                        },
                        24: {
                            par: 3,
                            score: 4
                        },
                        25: {
                            par: 4,
                            score: 4
                        },
                        26: {
                            par: 3,
                            score: 3
                        },
                        27: {
                            par: 5,
                            score: 5
                        }
                    }}
                /> */}
            </div>
            <Modal
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
        </Layout>
    )
}

export default Rounds