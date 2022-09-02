const renderFrontTableHeader = (holes) => {
    const tdArr = []
    tdArr.push(<td>Hole</td>)

    // loop through first 9 holes
    const holeArr = Object.keys(holes)
    for (let i = 0; i < 9; i++) {
        tdArr.push(<td>{ holeArr[i] }</td>)
    }

    tdArr.push(<td>In</td>)

    return tdArr
}

const renderFrontParRow = (holes) => {
    const tdArr = []
    tdArr.push(<td>Par</td>)
    
    // loop through first 9 holes' par rating
    for (let i = 1; i < 10; i++) {
        tdArr.push(<td>{ holes[i].par }</td>)
    }

    // get total par of front 9
    let parTotal = 0
    for (let i = 1; i < 10; i++) {
        parTotal += holes[i].par
    }
    tdArr.push(<td>{ parTotal }</td>)

    return tdArr
}

const renderFrontScoreRow = (holes) => {
    const tdArr = []
    tdArr.push(<td>Score</td>)
    
    // loop through first 9 holes' par rating
    for (let i = 1; i < 10; i++) {
        tdArr.push(<td>{ holes[i].score }</td>)
    }

    // get total par of front 9
    let scoreTotal = 0
    for (let i = 1; i < 10; i++) {
        scoreTotal += holes[i].score
    }
    tdArr.push(<td>{ scoreTotal }</td>)

    return tdArr
}

export { renderFrontTableHeader, renderFrontParRow, renderFrontScoreRow }