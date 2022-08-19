// components
import Layout from "../Layout"
import Table from "../Components/Table"

// data
import rounds from "../Temp Data/roundsdata"

// assets
import { ReactComponent as StatsIcon } from '../Assets/Icons/mixed-char-icon.svg'

const Rounds = () => {
    // {{ console.log(rounds)}}
    return(
        <Layout>
            <Table
                bodyData={rounds}
                headerColumns={["#", "Date", "Course", "Holes Played", "Stats"]}
                classList={["rounds-table"]}
                icon={<StatsIcon />}
            />
        </Layout>
    )
}

export default Rounds