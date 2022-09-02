// components
import Layout from "../Layout"
import CardOverview from "../Components/CardOverview"
import Table from "../Components/Table"
import Scorecard from "../Components/Scorecard"

// data
import scores from "../Temp Data/scoresData"

// assets
import { ReactComponent as GolfClubIcon } from '../Assets/Icons/golf-club-light-icon.svg'
import { ReactComponent as GolfballTeeIcon } from '../Assets/Icons/golfball-tee-light-icon.svg'
import { ReactComponent as GolfHoleIcon } from '../Assets/Icons/golf-hole-light-icon.svg'
import { ReactComponent as StatsIcon } from '../Assets/Icons/mixed-char-icon.svg'

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

            <div style={{marginTop: '3rem', display: "flex", alignItems: 'center', flexDirection: 'column'}} className="overview-section">
                <Scorecard
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
                    stats={false}
                    holeByHole={false}
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
            </div>
        </Layout>
    )
}

export default Scorecards