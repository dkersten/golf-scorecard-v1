// components
import Layout from "../Layout"
import SelectWithState from "../Components/SelectWithState"
import CardAchievement from "../Components/CardAchievement"

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

    const goalData = () => {
        const yearsGoalsArr = goals[yearChoice].goals
        const elemArr = []

        for ( let i = 0; i < yearsGoalsArr.length; i++ ) {
            elemArr.push(
                <CardAchievement
                    key={i}
                    dataObj={yearsGoalsArr[i]}
                />
            )
        }

        return elemArr
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
            <div className="overview-section">
                <div className="card-container">
                    <ul>
                        { goalData() }
                    </ul>
                </div>
            </div>
        </Layout>
    )
}

export default Goals