// components
import CardAchievement from "./CardAchievement"

// styling
import '../styling/components/MilestoneSection.scss'


const MilestoneSection = (props) => {

    const milestoneData = () => {
        const milestones = props.data
        const elemArr = []

        for ( let i = 0; i < milestones.length; i++ ) {
            elemArr.push(
                <CardAchievement
                    key={i}
                    dataObj={milestones[i]}
                />
            )
        }

        return elemArr
    }

    return(
        <section>
            <h2>{props.category}</h2>
            <div className="overview-section">
                <div className="card-container">
                    { milestoneData() }
                </div>

            </div>
        </section>
    )
}

export default MilestoneSection