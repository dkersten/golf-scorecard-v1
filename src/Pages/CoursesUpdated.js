// components
import Layout from "../Layout"
import Table from "../Components/Table"
import CardOverview from "../Components/CardOverview"
import useWindowDimensions from "../Helpers/useWindowDimensions"

// styling
import "../styling/components/CoursesTable.scss"

// data
import courses from "../Temp Data/CoursesData"

// assets
import { ReactComponent as GolfClubIcon} from '../Assets/Icons/golf-club-light-icon.svg'
import { ReactComponent as AirlineTicketIcon } from '../Assets/Icons/airline-ticket.svg'
import { ReactComponent as GlobeIcon } from '../Assets/Icons/globe-icon.svg'
import TableCoursesMobile from "../Components/TableCoursesMobile"

const Courses = () => {

    const { width } = useWindowDimensions()

    const renderTableType = () => {
        if (width >= 550) {
            return(
                <Table
                    bodyData={courses.courses}
                    headerColumns={["#", "Name", "City", "State", "Country", "Date"]}
                    classList={["courses-table-updated"]}
                    hideIndex={false}
                    fullTable={false}
                />
            )
        } else  {
            return(
                <TableCoursesMobile
                    bodyData={courses.courses}
                />
            )
        }
        
    }

    return(
        <Layout>
            <div className="overview-section">
                <div className="card-container">
                    <ul>
                        <CardOverview 
                            icon={<GolfClubIcon />}
                            headline="Courses Played"
                            data={courses.totalPlayed}
                        />
                        <CardOverview 
                            icon={<AirlineTicketIcon style={{ transform: 'rotate(-8deg)' }} />} 
                            headline="States Played"
                            data={courses.statesPlayed}
                        />
                        <CardOverview 
                            icon={<GlobeIcon />} 
                            headline="Countries Played"
                            data={courses.countriesPlayed}
                        />
                    </ul>
                </div>
            </div>
            {renderTableType()} 
        </Layout>
    )
}

export default Courses