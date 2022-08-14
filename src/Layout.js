// components
import Nav from './Components/Nav'

// libraries
// import 

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