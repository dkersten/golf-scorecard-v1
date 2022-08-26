// styling
import '../styling/components/CardGoal.scss'

// assets
import { ReactComponent as GoalCompletedIcon } from '../Assets/Icons/goal-completed-icon.svg'
import { ReactComponent as GoalInProgressIcon } from '../Assets/Icons/goal-in-progress-icon.svg'

const CardGoal = (props) => {
    let {
        type: type,
        description: description,
        completed: completed,
        progress: progress
    } = props.dataObj

    const iconComponent = () => {
        if (completed) {
            return(
                <div className="flex-icon completed">
                    <GoalCompletedIcon />
                </div>
            )
        } else {
            return(
                <div className="flex-icon incomplete">
                    <GoalInProgressIcon />
                </div>
            )
        }
    }

    const completionProgressNumsComponent = () => {
        if (progress.current >= progress.total) {
            return(
                <span className="completion-count">
                    {progress.total}/{progress.total}
                </span>
            )
        } else {
            return(
                <span className="completion-count">
                    {progress.current}/{progress.total}
                </span>
            )
        }
    }

    const completionProgressBarComponent = () => {
        let completedPercentage
        if (progress.current >= progress.total) {
            completedPercentage = 100
        } else if (progress.current === 0) {
            completedPercentage = 0
        } else {
            completedPercentage = Math.floor((progress.current / progress.total) * 100)
        }

        console.log(completedPercentage)
        return(
            <div className="progress-bar-container">
                <div className="progress-bar-bg"></div>
                <div
                    style={{ width: `${completedPercentage}%` }}
                    className="progress-bar"
                >
                </div>
            </div>
        )
    }

    const renderCardContent = () => {
        if (type === "bool") {
            return(
                <div className='bool-type'>
                    <div className="flex-container">
                        { iconComponent() }
                        <div className="flex-info">
                            <h2>{ description }</h2>
                        </div>
                        <div className="flex-progress-container">
                            { completionProgressNumsComponent() }
                            { completionProgressBarComponent() }
                        </div>
                    </div>
                </div>
            )
        } else if (type === "cumulative") {
            return(
                <div className='cumulative-type'>
                    <div className="flex-container">
                        { iconComponent() }
                        <div className="flex-info">
                            <h2>{ description }</h2>
                        </div>
                        <div className="flex-progress-container">
                            { completionProgressNumsComponent() }
                            { completionProgressBarComponent() }
                        </div>
                    </div>
                </div>
            )
        }
    }

    return(
        <li className="card-goal">
            { renderCardContent() }
        </li>
    )
}

export default CardGoal