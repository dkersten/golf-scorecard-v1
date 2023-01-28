const BtnSecondary = (props) => {
    const renderBtn = () => {
        if (props.clickAction) {
            return(
                <button
                    className='btn-secondary'
                    onClick={props.clickAction}
                >
                    <span className="btn-text">
                        {props.text}
                    </span>
                    <span className="btn-icon">
                        {props.icon}
                    </span>
                </button>
            )
        } else {
            return(
                <button
                    className='btn-secondary'
                >
                    <span className="btn-text">
                        {props.text}
                    </span>
                    <span className="btn-icon">
                        {props.icon}
                    </span>
                </button>
            )
        }
    }
    return(
        <>
            { renderBtn() }
        </>
    )
}

export default BtnSecondary