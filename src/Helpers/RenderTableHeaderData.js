const renderHeaderData = (data, hideIndex) => {
    const headerEls = []
    
    // conditionally show column "#" based on hideindex
    let startingIndex
    hideIndex ? startingIndex = 1 : startingIndex = 0

    for (let i = startingIndex; i < data.length; i++ ) {
        headerEls.push(<th className="table__head-cell" key={[i]}>{ data[i] }</th>)
    }
    return headerEls
}

export default renderHeaderData