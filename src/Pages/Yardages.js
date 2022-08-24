// components
import Layout from "../Layout"
import Table from "../Components/Table"

// data
import yardages from "../Temp Data/yardagesData"

const Yardages = () => {
    return(
        <Layout>
            <Table
                bodyData={yardages}
                headerColumns={["#", "Club", "Min Total", "Max Total", "Min Carry", "Max Carry", "Loft"]}
                classList={["yardages-table"]}
                hideIndex={true}
                fullTable={true}
            />
        </Layout>
    )
}

export default Yardages