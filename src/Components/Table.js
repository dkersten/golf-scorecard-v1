// styling
import '../styling/components/Table.scss'

const Table = (props) => {

    // Populate table head with data from props
    const renderHeaderData = (data) => {
        const headerEls = []
        for (let i = 0; i < data.length; i++ ) {
            headerEls.push(<th key={[i]}>{ data[i] }</th>)
        }
        return headerEls
    }

    // populate table body with data from props
    const renderBodyData = (data) => {
        const bodyRows = []
        // loop through array of objects to build out tr elements
        for (let i = 0; i < data.length; i++) {
            const rowTDs = []
            const rowNum = i + 1
            rowTDs.push(<td key={data[i]}>{ rowNum }</td>)

            // loop through object to build out td elements
            for (const key in data[i]) {
                // console.log(typeof(data[i]))
                if (typeof data[i][key] === 'string') {
                    rowTDs.push(<td key={key}>{ data[i][key] }</td>)
                } else if (typeof data[i][key] === 'number') {
                    rowTDs.push(<td key={key}>{ data[i][key] }</td>)
                } else if (typeof data[i][key] === 'boolean') {
                    data[i][key] === true 
                        ? 
                            rowTDs.push(<td key={key}>{props.icon}</td>) 
                        : 
                            rowTDs.push(<td key={key}>{ null }</td>)
                }
            }

            bodyRows.push(<tr>{ rowTDs }</tr>)
        }
        return bodyRows
    }

    // populate classlist
    const classList = (data) => {
        let tableClasses = ""
        for (let i = 0; i < data.length; i++) {
            tableClasses += (data[i] + " ")
        }
        // remove trailing space from string
        tableClasses = tableClasses.slice(0, -1)

        return tableClasses
    }

    return(
        <table className={ classList(props.classList) }>
            <thead>
                <tr>
                { renderHeaderData(props.headerColumns) }
                </tr>
            </thead>
            <tbody>
                { renderBodyData(props.bodyData) }
            </tbody>
        </table>
    )
}

export default Table