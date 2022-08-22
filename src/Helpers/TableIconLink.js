import { Link } from 'react-router-dom'
import { ReactComponent as DefaultIcon } from '../Assets/Icons/horizontal-dots.svg'

const renderIcon = (iconInfo) => {
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

export default renderIcon