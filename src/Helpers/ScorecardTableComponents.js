import { ReactComponent as CrosshairsIcon } from '../Assets/Icons/crosshairs-light-icon.svg'
import { ReactComponent as ArrowLeftIcon } from '../Assets/Icons/arrow-left-light-icon.svg'
import { ReactComponent as ArrowRightIcon } from '../Assets/Icons/arrow-right-light-icon.svg'
import { ReactComponent as XIcon } from '../Assets/Icons/x-icon-light.svg'

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

const renderFairwaysInReg = (holes, startingHole) => {
    const tdArr = []
    tdArr.push(<td>FiR</td>)

    let hitFairways = 0
    let totalFairways = 0

    // loop through holes and render left, right, hit, NA and add to hit fairways and total fairways to calculate percentage
    for (let i = startingHole; i < (startingHole + 9); i++) {
        if (holes[i].fir === true) {
            tdArr.push(<td className='color-primary'><CrosshairsIcon /></td>)
            hitFairways += 1
            totalFairways += 1

        } else if (holes[i].fir === "left") {
            tdArr.push(<td><ArrowLeftIcon /></td>)
            hitFairways += 0
            totalFairways += 1

        } else if (holes[i].fir === "right") {
            tdArr.push(<td><ArrowRightIcon /></td>)
            hitFairways += 0
            totalFairways += 1

        } else if (holes[i].fir === null) {
            tdArr.push(<td></td>)
        }
    }

    // calculate percentage
    let firPercentage = (hitFairways / totalFairways)
    firPercentage = firPercentage * 100
    firPercentage = Math.round(firPercentage * 10) / 10

    tdArr.push(<td>{firPercentage}%</td>)
    return tdArr
}

const renderGreensInReg = (holes, startingHole) => {
    const tdArr = []
    tdArr.push(<td>GiR</td>)

    let hitGreens = 0
    let totalGreens = 0

    for (let i = startingHole; i < (startingHole + 9); i++) {
        if (holes[i].gir) {
            tdArr.push(<td className='color-primary'><CrosshairsIcon /></td>)
            hitGreens += 1
            totalGreens += 1
        } else {
            tdArr.push(<td><XIcon /></td>)
            totalGreens += 1
        }
    }

    // calculate percentage
    let girPercentage = (hitGreens / totalGreens)
    girPercentage = girPercentage * 100
    girPercentage = Math.round(girPercentage * 10) / 10

    tdArr.push(<td>{girPercentage}%</td>)
    return tdArr
}

const renderPutts = (holes, startingHole) => {
    const tdArr = []
    tdArr.push(<td>Putts</td>)

    let totalPutts = 0

    for (let i = startingHole; i < (startingHole + 9); i++) {
        tdArr.push(<td>{ holes[i].putts }</td>)
        totalPutts += holes[i].putts
    }

    tdArr.push(<td>{ totalPutts }</td>)
    return tdArr
}

export { renderScorecardTableHeader, renderScorecardTableBodyRow, renderFairwaysInReg, renderGreensInReg, renderPutts }