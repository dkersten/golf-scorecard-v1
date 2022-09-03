const renderScorecardTableHeader = (holes, holesArr) => {
    const tdArr = []
    tdArr.push(<td>Hole</td>)

    for (let i = 0; i < holesArr.length; i++) {
        tdArr.push(<td>{ holesArr[i] }</td>)
    }

    tdArr.push(<td>In</td>)
    return tdArr
}

const renderScorecardTableBodyRow = (holes, startingHole, keyname) => {
    const tdArr = []

    const rowName = keyname.charAt(0).toUpperCase() + keyname.slice(1)
    tdArr.push(<td>{rowName}</td>)
    
    // loop through applicable 9 holes' par rating
        for (let i = startingHole; i < (startingHole + 9); i++) {
        tdArr.push(<td>{ holes[i][keyname] }</td>)
    }

    // get row total (par or score) of applicable 9
    let rowTotal = 0
        for (let i = startingHole; i < (startingHole + 9); i++) {
        rowTotal += holes[i][keyname]
    }
    tdArr.push(<td>{ rowTotal }</td>)

    return tdArr
}

export { renderScorecardTableHeader, renderScorecardTableBodyRow }