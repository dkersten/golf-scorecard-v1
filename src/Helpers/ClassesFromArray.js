const classList = (data) => {
    let tableClasses = ""
    for (let i = 0; i < data.length; i++) {
        tableClasses += (data[i] + " ")
    }
    
    // remove trailing space from string
    tableClasses = tableClasses.slice(0, -1)

    return tableClasses 
}

export default classList