const TableCoursesMobile = (props) => {
    console.log(props.bodyData)
    return(
        // <div className="mobile-course-card">
        //     Index: props.bodyData.name
        //     <br />
        //     Location: props.bodyData.city, props.bodyData.state, props.bodyData.country
        //     <br />
        //     Date: props.bodyData.year
        // </div>
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

                            </div>
                            <div className="date">
                                
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default TableCoursesMobile