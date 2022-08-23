// components
import Layout from "../Layout"
import CardOverview from "../Components/CardOverview"
import Table from "../Components/Table"

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

    let currentYear = new Date().getFullYear()
    currentYear = currentYear.toString()
    const [yearChoice, setYearChoice] = useState(currentYear)

    return(
        <Layout>
            <div className="year-selector-section">
                <form>
                    <div className="dropdown-container">
                        <label htmlFor="yearSelect">Year: </label>
                        <select
                            id="yearSelect"
                            value={yearChoice}
                            defaultValue={currentYear}
                            onChange={(e) => setYearChoice(e.target.value)}
                        >
                            <option value="2021">2021</option>
                            <option defaultValue value="2022">2022</option>
                            <option value="alltime">All Time</option>
                        </select>
                    </div>
                </form>
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
            <Table
                bodyData={rounds[yearChoice].rounds}
                headerColumns={["#", "Date", "Course", "Holes Played", "Stats"]}
                classList={["rounds-table"]}
                iconInfo={{
                    icon: <StatsIcon />,
                    link: "#"
                }}
            />
        </Layout>
    )
}

export default Rounds