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
                <span className="number-count">
                    {progress.total}/{progress.total} complete
                </span>
            )
        } else {
            return(
                <span className="number-count">
                    {progress.current}/{progress.total} complete
                </span>
            )
        }
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
                            <span className='completion-count'>
                                { completionProgressNumsComponent() }
                            </span>
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
                            <span className='completion-count'>
                                { completionProgressNumsComponent() }
                            </span>
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