// components
import Layout from "../Layout"
import Table from "../Components/Table"

// data
import rounds from "../Temp Data/roundsdata"

const Rounds = () => {
    // {{ console.log(rounds)}}
    return(
        <Layout>
            This is the rounds screen
            <Table
                bodyData={rounds}
                headerColumns={["#", "Date", "Course", "Number of Holes"]}
                classList={["rounds-table"]}
            />
        </Layout>
    )
}

export default Rounds