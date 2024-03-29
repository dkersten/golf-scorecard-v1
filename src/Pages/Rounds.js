// components
import Layout from "../Layout"
import CardOverview from "../Components/CardOverview"
import Table from "../Components/Table/Table"
import SelectWithState from "../Components/SelectWithState"
import LineGraph from "../Components/LineGraph/LineGraph"
import Modal from "../Components/Modal"
import Button from 'react-bootstrap/Button'

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
    // currentYear = currentYear.toString()
    currentYear = "2022"
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
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Scorecard"
                type="scorecard"
                scorecardId={54}
            />
        </Layout>
    )
}

export default Rounds