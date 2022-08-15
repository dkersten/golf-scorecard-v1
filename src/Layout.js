// components
import Nav from './Components/Nav'

// styling
import './styling/components/Layout.scss'

const Layout = ({children}) => {
    return(
        <>
            <Nav />
            <main>
                { children }
            </main>
        </>
    )
}

export default Layout