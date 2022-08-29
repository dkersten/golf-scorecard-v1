// components
// import ScorcardCoverviewCard from "../Components/ScorecardOverviewCard"
import Layout from "../Layout"
import CardOverview from "../Components/CardOverview"
import Table from "../Components/Table"

// data
import scores from "../Temp Data/scoresData"

// assets
import { ReactComponent as GolfClubIcon } from '../Assets/Icons/golf-club-light-icon.svg'
import { ReactComponent as GolfballTeeIcon } from '../Assets/Icons/golfball-tee-light-icon.svg'
import { ReactComponent as GolfHoleIcon } from '../Assets/Icons/golf-hole-light-icon.svg'
import { ReactComponent as StatsIcon } from '../Assets/Icons/mixed-char-icon.svg'

const Scorecards = () => {
    console.log(scores.scores)
    return(
        <Layout>
            <div className="overview-section">
                <h2>Best Rounds: 9 Holes</h2>
                <div className="card-container">
                    <ul>
                        <CardOverview 
                            icon={<GolfClubIcon />}
                            headline="Last 5 Played"
                            data={39}
                        />
                        <CardOverview 
                            icon={<GolfballTeeIcon />} 
                            headline="Last 10 Played"
                            data={39}
                        />
                        <CardOverview 
                            icon={<GolfHoleIcon />} 
                            headline="All Time"
                            data={37}
                        />
                    </ul>
                </div>
            </div>
            <div className="overview-section">
                <h2>Best Rounds: 18 Holes</h2>
                <div className="card-container">
                    <ul>
                        <CardOverview 
                            icon={<GolfClubIcon />}
                            headline="Last 5 Played"
                            data={82}
                        />
                        <CardOverview 
                            icon={<GolfballTeeIcon />} 
                            headline="Last 10 Played"
                            data={81}
                        />
                        <CardOverview 
                            icon={<GolfHoleIcon />} 
                            headline="All Time"
                            data={80}
                        />
                    </ul>
                </div>
            </div>
            <Table
                bodyData={scores.scores}
                headerColumns={["#", "Date", "Course", "Holes Played", "Total Score", "Hole by Hole", "Stats"]}
                classList={["rounds-table"]}
                iconInfo={{
                    icon: <StatsIcon />,
                    link: "#"
                }}
                hideIndex={false}
                fullTable={false}
            />
        </Layout>
    )
}

export default Scorecards