// styling
import '../styling/components/CardGoal.scss'

// assets
import { ReactComponent as GoalCompletedIcon } from '../Assets/Icons/goal-completed.svg'
import { ReactComponent as GoalInProgressIcon } from '../Assets/Icons/goal-in-progress.svg' 

const CardGoal = (props) => {
    let {
        type: type,
        description: description,
        completed: completed,
        progress: progress
    } = props.dataObj

    const renderCardContent = () => {
        if (type === "bool") {
            return(
                <div className='bool-type'>
                    <div className="flex-container">
                        <div className="flex-icon">
                            {
                                completed
                                    ? 
                                        <GoalCompletedIcon />
                                    :
                                        <GoalInProgressIcon />
                            }
                        </div>
                        <div className="flex-info">
                            <h2>{ description }</h2>
                        </div>
                        <div className="flex-progress-container">
                            Progress bar here
                        </div>
                    </div>
                </div>
            )
        } else if (type === "cumulative") {
            return(
                <div className='cumulative-type'>
                    <div className="flex-container">
                        <div className="flex-icon">
                            {
                                completed
                                    ? 
                                        <GoalCompletedIcon />
                                    :
                                        <GoalInProgressIcon />
                            }
                        </div>
                        <div className="flex-info">
                            <h2>{ description }</h2>
                        </div>
                        <div className="flex-progress-container">
                            Progress bar here
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