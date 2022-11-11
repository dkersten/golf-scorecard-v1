import { Link } from 'react-router-dom'
import { useState } from 'react'

// components
import { ReactComponent as DefaultIcon } from '../Assets/Icons/horizontal-dots.svg'
import Modal from "../Components/Modal"

const RenderIcon = (props) => {

    const [modalShow, setModalShow] = useState(false)

    const displayIcon = (iconInfo, roundId) => {
        if (iconInfo.icon && iconInfo.link) {
            return(<Link onClick={() => setModalShow(true)} to={iconInfo.link}>{iconInfo.icon}</Link>)
        } else if (iconInfo.icon) {
            return iconInfo.icon
        } else if (iconInfo.link) {
                return <Link onClick={() => setModalShow(true)} to={iconInfo.link}><DefaultIcon /></Link>
        } else {
                return <DefaultIcon />
        }
    }
    
    return(
        <>
            {displayIcon(props.icon, props.roundId)}
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Scorecard"
                type="scorecard"
                scorecardId={54}
            />
        </>
    )
}

export default RenderIcon