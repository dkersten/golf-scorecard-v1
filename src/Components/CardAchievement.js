// libraries/helpers
import { iconComponent, completionProgressNumsComponent, completionProgressBarComponent } from '../Helpers/GoalsCardComponents'

// styling
import '../styling/components/CardAchievement.scss'

const CardAchievement = (props) => {
    let {
        type: goalType,
        description: goalDescription,
        completed: goalCompleted,
        progress: goalProgress
    } = props.dataObj

    const renderCardContentClasses = () => {
        let classes
        if (goalType === "bool") {
            classes = "bool-type"
        } else if (goalType === "cumulative") {
            classes = "cumulative-type"
        }

        return classes
    }

    return(
        <li className="goal-card">
            <div className={renderCardContentClasses()}>
                <div className="flex-container">
                    { iconComponent(goalCompleted) }
                    <div className="flex-info goal-card__info">
                        <h2 className="goal-card__description">{ goalDescription }</h2>
                    </div>
                    <div className="goal-card__progress-container flex-progress-container">
                        { completionProgressNumsComponent(goalProgress.current, goalProgress.total) }
                        { completionProgressBarComponent(goalProgress.current, goalProgress.total) }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CardAchievement