import RenderTableBodyRows from './RenderTableBodyRows'

const renderInitialBodyData = (data, icon, isMobile, hideIndex) => {
    const bodyRows = []
    // loop through array of objects to build out tr elements
    if (data.length >= 10) {
        for (let i = 0; i < 10; i++) {
            RenderTableBodyRows(data, icon, isMobile, i, bodyRows, hideIndex)
        }
    } else {
        for (let i = 0; i < data.length; i++) {
            RenderTableBodyRows(data, icon, isMobile, i, bodyRows, hideIndex)
        }
    }
    return bodyRows
}

const renderAllBodyData = (data, icon, isMobile, hideIndex) => {
    const bodyRows = []
    // loop through array of objects to build out tr elements
    for (let i = 0; i < data.length; i++) {
        RenderTableBodyRows(data, icon, isMobile, i, bodyRows, hideIndex)
    }
    return bodyRows
}

export { renderInitialBodyData, renderAllBodyData }