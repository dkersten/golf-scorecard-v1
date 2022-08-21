// styling
import '../styling/components/Nav.scss'

// libraries
import { Link } from 'react-router-dom'

// assets
import { ReactComponent as HomeIcon } from '../Assets/Icons/home-icon.svg'
import { ReactComponent as DashboardIcon } from '../Assets/Icons/dashboard-icon.svg'
import { ReactComponent as RoundsIcon } from '../Assets/Icons/golf-hole-light-icon.svg'

const Nav = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <div className="icon-container">
                            <HomeIcon />
                        </div>
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard">
                        <div className="icon-container">
                            <DashboardIcon />
                        </div>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                <Link to="/rounds">
                        <div className="icon-container">
                            <RoundsIcon />
                        </div>
                        <span>Rounds</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav