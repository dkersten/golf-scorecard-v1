// components
import Layout from "../Layout"
import Table from "../Components/Table"
import CardOverview from "../Components/CardOverview"

// data
import courses from "../Temp Data/CoursesData"

// assets
import { ReactComponent as GolfClubIcon} from '../Assets/Icons/golf-club-light-icon.svg'
import { ReactComponent as AirlineTicketIcon } from '../Assets/Icons/airline-ticket.svg'
import { ReactComponent as GlobeIcon } from '../Assets/Icons/globe-icon.svg'

const Courses = () => {
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