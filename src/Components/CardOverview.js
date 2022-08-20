// styling
import '../styling/components/CardOverview.scss'

const CardOverview = (props) => {
    return(
        <li className="card-overview">
            <div className="icon-section">
                {props.icon}
            </div>
            <div className="stats-container">
                <div className="flex1">
                    <h2>{ props.headline }</h2>
                </div>
                <div className="flex2">
                    <span>{ props.data }</span>
                </div>
            </div>
        </li>
    )
}

export default CardOverview