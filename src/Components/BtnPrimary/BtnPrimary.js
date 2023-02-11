import './btn-primary.scss';

const BtnPrimary = (props) => {
    const renderBtn = () => {
        if (props.clickAction) {
            return(
                <button
                    className='btn-primary'
                    onClick={props.clickAction}
                >
                    <span className="btn-primary__text">
                        {props.text}
                    </span>
                    <span className="btn-primary__icon">
                        {props.icon}
                    </span>
                </button>
            )
        } else {
            return(
                <button
                    className='btn-primary'
                >
                    <span className="btn-primary__text">
                        {props.text}
                    </span>
                    <span className="btn-primary__icon">
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

export default BtnPrimary