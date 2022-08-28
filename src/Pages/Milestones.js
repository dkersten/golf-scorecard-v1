// components
import Layout from "../Layout"
import MilestoneSection from "../Components/MilestoneSection"

// data
import MilestoneData from "../Temp Data/MilestonesData"

const Milestones = () => {
    return(
        <Layout clasName="milestone-page">
            <MilestoneSection
                category="Rounds Scoring"
                data={MilestoneData.roundScoring}
            />
            <MilestoneSection
                category="Holes Scoring"
                data={MilestoneData.holeScoring}
            />
            <MilestoneSection
                category="Rounds Played"
                data={MilestoneData.numRounds}
            />
        </Layout>
    )
}

export default Milestones