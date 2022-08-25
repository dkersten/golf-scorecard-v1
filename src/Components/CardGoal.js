// styling
import '../styling/components/CardGoal.scss'

const CardGoal = (props) => {
    console.log(props.dataObj)
    const renderCardContent = () => {
        if (props.type === "bool") {
            return(
                "This is a boolean card"
            )
        } else if (props.type === "cumulative") {
            return(
                "This is a cumulative card"
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