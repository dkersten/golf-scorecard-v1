const renderHeaderData = (data) => {
    const headerEls = []
    for (let i = 0; i < data.length; i++ ) {
        headerEls.push(<th key={[i]}>{ data[i] }</th>)
    }
    return headerEls
}

export default renderHeaderData