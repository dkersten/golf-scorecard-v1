// styling
import '../styling/components/Nav.scss'

// libraries
import { Link } from 'react-router-dom'
import { useState } from 'react'

// assets
import { ReactComponent as HomeIcon } from '../Assets/Icons/home-icon.svg'
import { ReactComponent as DashboardIcon } from '../Assets/Icons/dashboard-icon.svg'
import { ReactComponent as RoundsIcon } from '../Assets/Icons/golfball-tee-light-icon.svg'
import { ReactComponent as MenuIcon } from '../Assets/Icons/menu-icon.svg'
import { ReactComponent as CloseIcon } from '../Assets/Icons/close-icon.svg'
import { ReactComponent as YardagesIcon } from '../Assets/Icons/ruler-icon.svg'
import { ReactComponent as CoursesIcon } from '../Assets/Icons/golf-hole-light-icon.svg'
import { ReactComponent as GoalsIcon } from '../Assets/Icons/goals-icon-light.svg'
import { ReactComponent as MilestonesIcon } from '../Assets/Icons/milestones-icon.svg'
import { ReactComponent as ScorecardsIcon } from '../Assets/Icons/scorecards-icon.svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return(
        <nav
            className={`${menuOpen ? 'menu-opened' : 'menu-closed'}`}
        >
            <div className="menu-buttons">
                <button
                    aria-label='Open Menu'
                    onClick={toggleMenu}
                    className='btn-open'
                >
                    <MenuIcon />
                </button>
                <button 
                    aria-label='Close Menu'
                    onClick={toggleMenu}
                    className='btn-close'
                >
                    <CloseIcon />
                </button>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        <div className="icon-container">
                            <HomeIcon style={{marginLeft: '-2px'}} />
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
                            <RoundsIcon style={{marginLeft: '2px'}} />
                        </div>
                        <span>Rounds</span>
                    </Link>
                </li>
                <li>
                    <Link to="/scorecards">
                        <div className="icon-container">
                            <ScorecardsIcon />
                        </div>
                        <span>Scorecards</span>
                    </Link>
                </li>
                <li>
                    <Link to="/yardages">
                        <div className="icon-container">
                            <YardagesIcon />
                        </div>
                        <span>Yardages</span>
                    </Link>
                </li>
                <li>
                    <Link to="/courses">
                        <div className="icon-container">
                            <CoursesIcon />
                        </div>
                        <span>Courses Played</span>
                    </Link>
                </li>
                <li>
                    <Link to="/goals">
                        <div className="icon-container">
                            <GoalsIcon />
                        </div>
                        <span>Seasonal Goals</span>
                    </Link>
                </li>
                <li>
                    <Link to="/milestones">
                        <div className="icon-container">
                            <MilestonesIcon style={{marginLeft: '4px'}} />
                        </div>
                        <span>Milestones</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav