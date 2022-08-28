// components
import ScorcardCoverviewCard from "../Components/ScorecardOverviewCard"
import Layout from "../Layout"
import CardOverview from "../Components/CardOverview"

// assets
import { ReactComponent as GolfClubIcon } from '../Assets/Icons/golf-club-light-icon.svg'
import { ReactComponent as GolfballTeeIcon } from '../Assets/Icons/golfball-tee-light-icon.svg'
import { ReactComponent as GolfHoleIcon } from '../Assets/Icons/golf-hole-light-icon.svg'

const Scorecards = () => {
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
            <ScorcardCoverviewCard />
        </Layout>
    )
}

export default Scorecards