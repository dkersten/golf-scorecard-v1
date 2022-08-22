import renderIcon from "./TableIconLink"

const renderBodyData = (data, icon, isMobile) => {
    const bodyRows = []
    // loop through array of objects to build out tr elements
    for (let i = 0; i < data.length; i++) {
        const rowTDs = []
        const rowNum = i + 1
        rowTDs.push(<td key={data[i]}>{ rowNum }</td>)

        // loop through object to build out td elements
        for (const key in data[i]) {
            if (key === "date") {
                rowTDs.push(<td key={key}>
                    {isMobile ? data[i][key].mobile : data[i][key].full}
                </td>)
            } else {
                if (typeof data[i][key] === 'string') {
                    rowTDs.push(<td key={key}>{ data[i][key] }</td>)
                } else if (typeof data[i][key] === 'number') {
                    rowTDs.push(<td key={key}>{ data[i][key] }</td>)
                } else if (typeof data[i][key] === 'boolean') {
                    if (data[i][key] === true) {
                        rowTDs.push(<td key={key}>{ renderIcon(icon) }</td>) 
                    } else {
                        rowTDs.push(<td key={key}>{ null }</td>)
                    }
                }
            }
        }

        bodyRows.push(<tr>{ rowTDs }</tr>)
    }
    return bodyRows
}

export default renderBodyData