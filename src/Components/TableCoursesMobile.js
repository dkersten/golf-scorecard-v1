// assets
import { ReactComponent as LocationIcon } from '../Assets/Icons/location-solid-icon.svg'
import { ReactComponent as DateIcon } from '../Assets/Icons/calendar-solid-icon.svg'

const TableCoursesMobile = (props) => {
    return(
        <div className="card-container">
            <h2>Courses</h2>
            {
                props.bodyData.map((course, index) =>
                    <div className="mobile-course-card">
                        <div className="course-name">
                            <h3><span className="num">#{index + 1}</span> {course.name}</h3>
                        </div>
                        <div className="details-container">
                            <div className="location">
                                <LocationIcon /> {course.city} {course.state}, {course.country}
                            </div>
                            <div className="date">
                                <DateIcon /> {course.year}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TableCoursesMobile