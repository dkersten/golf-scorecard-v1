import renderIcon from "./TableIconLink"

const renderBodyRows = (data, icon, isMobile, i, bodyRows, hideIndex) => {
    const rowTDs = []
    const rowNum = i + 1
    
    // if hide index is false (show index) add row number as first td element 
    if (!hideIndex) {
        rowTDs.push(<td key={data[i]}>{ rowNum }</td>)
    }

    // loop through object to build out td elements
    for (const key in data[i]) {
        if (key === "date") {
            rowTDs.push(<td key={key}>
                {isMobile ? data[i][key].mobile : data[i][key].full}
            </td>)
        } else if (key === "roundId") {
            // do nothing. Don't want this cell rendered in the table. We are adding an attribute to the stats cell below
        } else {
            if (typeof data[i][key] === 'string') {
                rowTDs.push(<td key={key}>{ data[i][key] }</td>)
            } else if (typeof data[i][key] === 'number') {
                rowTDs.push(<td key={key}>{ data[i][key] }</td>)
            } else if (typeof data[i][key] === 'boolean') {
                if (data[i][key] === true) {
                    rowTDs.push(<td data-id={data[i].roundId}  key={key}>{ renderIcon(icon) }</td>) 
                } else {
                    rowTDs.push(<td data-id={data[i].roundId} key={key}>{ null }</td>)
                }
            }
        }
    }

    bodyRows.push(<tr>{ rowTDs }</tr>)
}

export default renderBodyRows