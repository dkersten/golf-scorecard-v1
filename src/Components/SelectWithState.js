// styling
import '../styling/components/Select.scss'

const SelectWithState = (props) => {
    return(
        <form>
            <div className="dropdown-container">
                <label
                    htmlFor={props.selectId}
                >
                    {props.selectValue}
                </label>
                <select
                    id={props.selectId}
                    value={props.yearChoice}
                    defaultValue={props.defaultVal}
                    onChange={(e) => props.setCurrentState(e.target.value)}
                >
                    <option value="2021">2021</option>
                    <option defaultValue value="2022">2022</option>
                    <option value="alltime">All Time</option>
                </select>
            </div>
        </form>
    )
}

export default SelectWithState