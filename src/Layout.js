// components
import Nav from './Components/Nav'

// styling
import './styling/components/Layout.scss'

const Layout = ({children}) => {
    return(
        <div className='app-wrapper'>
            <Nav />
            <main>
                { children }
            </main>
        </div>
    )
}

export default Layout