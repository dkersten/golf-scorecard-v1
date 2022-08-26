// assets
import { ReactComponent as GoalCompletedIcon } from '../Assets/Icons/goal-completed-icon.svg'
import { ReactComponent as GoalInProgressIcon } from '../Assets/Icons/goal-in-progress-icon.svg'

const iconComponent = (completed) => {
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

const completionProgressNumsComponent = (current, total) => {
    if (current >= total) {
        return(
            <span className="completion-count">
                {total}/{total}
            </span>
        )
    } else {
        return(
            <span className="completion-count">
                {current}/{total}
            </span>
        )
    }
}

const completionProgressBarComponent = (current, total) => {
    let completedPercentage
    if (current >= total) {
        completedPercentage = 100
    } else if (current === 0) {
        completedPercentage = 0
    } else {
        completedPercentage = Math.floor((current / total) * 100)
    }

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

export { iconComponent, completionProgressNumsComponent, completionProgressBarComponent }