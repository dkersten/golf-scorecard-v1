// components
import { ReactComponent as DefaultIcon } from '../Assets/Icons/horizontal-dots.svg'

// libraries
import { Link } from 'react-router-dom'

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
                    if (data[i][key] === true) {
                        rowTDs.push(<td key={key}>{ renderIcon() }</td>) 
                    } else {
                        rowTDs.push(<td key={key}>{ null }</td>)
                    } 
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

    // build icon/link
    const renderIcon = () => {
        if (props.iconInfo.icon && props.iconInfo.link) {
            return(<Link to={props.iconInfo.link}>{props.iconInfo.icon}</Link>)
        } else if (props.iconInfo.icon) {
            return props.iconInfo.icon
        } else if (props.iconInfo.link) {
                return <Link to={props.iconInfo.link}><DefaultIcon /></Link>
        } else {
                return <DefaultIcon />
        }
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