// components
import Layout from "../Layout"
import Table from "../Components/Table"

// data
import courses from "../Temp Data/CoursesData"

const Courses = () => {
    return(
        <Layout>
            <Table
                bodyData={courses.courses}
                headerColumns={["#", "Name", "City", "State / Province", "Country", "Date"]}
                classList={["courses-table"]}
                hideIndex={false}
                fullTable={false}
            />
        </Layout>
    )
}

export default Courses