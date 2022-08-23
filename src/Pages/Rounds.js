// components
import Layout from "../Layout"
import CardOverview from "../Components/CardOverview"
import Table from "../Components/Table"

// data
import rounds from "../Temp Data/roundsdata"
// import rounds2 from "../Temp Data/updatedRoundsData"

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
    // console.log(typeof currentYear)
    const [choice, setChoice] = useState(currentYear)

    return(
        <Layout>
            <div className="year-selector-section">
                <form>
                    <div className="dropdown-container">
                        <label htmlFor="yearSelect">Year: </label>
                        <select
                            id="yearSelect"
                            value={choice}
                            defaultValue={currentYear}
                            onChange={(e) => setChoice(e.target.value)}
                        >
                            <option value="2021">2021</option>
                            <option defaultValue value="2022">2022</option>
                            <option value="alltime">All Time</option>
                        </select>
                    </div>
                </form>
                <div>Year Selected: { choice }</div>
            </div>
            <div className="overview-section">
                <div className="card-container">
                    <ul>
                        <CardOverview 
                            icon={<GolfClubIcon />}
                            headline="Rounds Played"
                            data={26}
                        />
                        <CardOverview 
                            icon={<GolfballTeeIcon />} 
                            headline="Holes Played"
                            data={297}
                        />
                        <CardOverview 
                            icon={<GolfHoleIcon />} 
                            headline="Courses Played"
                            data={6}
                        />
                    </ul>
                </div>
            </div>
            <Table
                bodyData={rounds}
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