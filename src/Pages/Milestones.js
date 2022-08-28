// components
import Layout from "../Layout"
import MilestoneSection from "../Components/MilestoneSection"

// data
import MilestoneData from "../Temp Data/MilestonesData"

const Milestones = () => {
    return(
        <Layout>
            <div className="milestone-page">
                <MilestoneSection
                    category="Rounds Scoring"
                    data={MilestoneData.roundScoring}
                />
                <MilestoneSection
                    category="Individual Hole"
                    data={MilestoneData.holeScoring}
                />
                <MilestoneSection
                    category="Rounds Played"
                    data={MilestoneData.numRounds}
                />
            </div>
        </Layout>
    )
}

export default Milestones