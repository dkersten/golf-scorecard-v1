// components
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

    const calculateBestScores = (numHoles, duration) => {
        let numRounds
        let scoresArr = []

        if (duration === "all") {
            numRounds = scores.scores.length
        } else {
            numRounds = duration
        }

        let rounds = scores.scores.filter(score => score.holesPlayed === numHoles)

        for (let i = 0; i < rounds.length; i++) {
            scoresArr.push(rounds[i])
        }

        scoresArr = scoresArr.slice(0, numRounds)

        const bestRoundObj = scoresArr.sort((a, b) => a.score > b.score ? 1 : -1)
        const bestScore = bestRoundObj[0].score

        return bestScore
    }

    return(
        <Layout>
            <div className="overview-section">
                <h2>Best Rounds: 9 Holes</h2>
                <div className="card-container">
                    <ul>
                        <CardOverview 
                            icon={<GolfClubIcon />}
                            headline="Last 5 Played"
                            data={calculateBestScores(9, 5)}
                        />
                        <CardOverview 
                            icon={<GolfballTeeIcon />} 
                            headline="Last 10 Played"
                            data={calculateBestScores(9, 10)}
                        />
                        <CardOverview 
                            icon={<GolfHoleIcon />} 
                            headline="All Time"
                            data={calculateBestScores(9, "all")}
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
                            data={calculateBestScores(18, 5)}
                        />
                        <CardOverview 
                            icon={<GolfballTeeIcon />} 
                            headline="Last 10 Played"
                            data={calculateBestScores(18, 10)}
                        />
                        <CardOverview 
                            icon={<GolfHoleIcon />} 
                            headline="All Time"
                            data={calculateBestScores(18, "all")}
                        />
                    </ul>
                </div>
            </div>
            <Table
                bodyData={scores.scores}
                headerColumns={["#", "Date", "Holes Played", "Score", "Course", "Stats"]}
                classList={["rounds-table"]}
                iconInfo={{
                    icon: <StatsIcon />,
                    link: "#"
                }}
                hideIndex={false}
                fullTable={false}
                scorecards={true}
            />
        </Layout>
    )
}

export default Scorecards