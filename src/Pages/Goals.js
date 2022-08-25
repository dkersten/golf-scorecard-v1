// components
import Layout from "../Layout"
import SelectWithState from "../Components/SelectWithState"

// data
import goals from "../Temp Data/goalsData"

// libraries/helpers
import { useState } from "react"

const Goals = () => {

    let currentYear = new Date().getFullYear()
    currentYear = currentYear.toString()
    const [yearChoice, setYearChoice] = useState(currentYear)

    const SelectOptions = (goals) => {
        const optionsObj = {}
        for (const [key, val] of Object.entries(goals)) {
            optionsObj[key] = val.displayName
        }
        return optionsObj
    }

    return(
        <Layout>
            <div className="year-selector-section">
                <SelectWithState
                    selectValue="Year: "
                    selectId={"yearSelect"}
                    defaultVal={yearChoice}
                    currentState={yearChoice}
                    setCurrentState={setYearChoice}
                    optionsItems={SelectOptions(goals)}
                />
            </div>
            
        </Layout>
    )
}

export default Goals