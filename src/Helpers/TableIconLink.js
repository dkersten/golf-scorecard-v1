import { Link } from 'react-router-dom'
// components
import { ReactComponent as DefaultIcon } from '../Assets/Icons/horizontal-dots.svg'

const RenderIcon = (props) => {

    const displayIcon = (iconInfo, roundId) => {
        if (iconInfo.icon && iconInfo.link) {
            return(<Link to={iconInfo.link}>{iconInfo.icon}</Link>)
        } else if (iconInfo.icon) {
            return iconInfo.icon
        } else if (iconInfo.link) {
                return <Link to={iconInfo.link}><DefaultIcon /></Link>
        } else {
                return <DefaultIcon />
        }
    }
    
    return(
        <>
            {displayIcon(props.icon, props.roundId)}
        </>
    )
}

export default RenderIcon