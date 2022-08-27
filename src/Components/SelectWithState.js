// styling
import '../styling/components/Select.scss'

const SelectWithState = (props) => {

    const buildOptionValues = () => {
        const selectElArr = []
        for (const [key, val] of Object.entries(props.optionsItems)) {
            selectElArr.push(
                <option value={key}>{val}</option>
            )
        }
        return selectElArr
    }

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
                    { buildOptionValues() }
                </select>
            </div>
        </form>
    )
}

export default SelectWithState