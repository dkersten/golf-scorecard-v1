// libraries/helpers
import { iconComponent, completionProgressNumsComponent, completionProgressBarComponent } from '../Helpers/GoalsCardComponents'

// styling
import '../styling/components/CardGoal.scss'

const CardGoal = (props) => {
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
        <li className="card-goal">
            <div className={renderCardContentClasses()}>
                <div className="flex-container">
                    { iconComponent(goalCompleted) }
                    <div className="flex-info">
                        <h2>{ goalDescription }</h2>
                    </div>
                    <div className="flex-progress-container">
                        { completionProgressNumsComponent(goalProgress.current, goalProgress.total) }
                        { completionProgressBarComponent(goalProgress.current, goalProgress.total) }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default CardGoal