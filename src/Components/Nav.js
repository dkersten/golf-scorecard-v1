// styling
import '../styling/components/Nav.scss'

// libraries
import { Link } from 'react-router-dom'
import { useState } from 'react'

// assets
import { ReactComponent as HomeIcon } from '../Assets/Icons/home-icon.svg'
import { ReactComponent as DashboardIcon } from '../Assets/Icons/dashboard-icon.svg'
import { ReactComponent as RoundsIcon } from '../Assets/Icons/golf-hole-light-icon.svg'
import { ReactComponent as MenuIcon } from '../Assets/Icons/menu-icon.svg'
import { ReactComponent as CloseIcon } from '../Assets/Icons/close-icon.svg'

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