// components
import Layout from "../Layout"
import BtnPrimary from "../Components/BtnPrimary"

// styling
import '../styling/Home.scss'

const Home = () => {
    return(
        <Layout>
            <h1>
                Add a new...
            </h1>
            <div className="forms-button-container">
                <BtnPrimary text="Round" />
                <BtnPrimary text="Course Played" />
                <BtnPrimary text="Set Yardages" />
                <BtnPrimary text="Seasonal Goal" />
                <BtnPrimary text="Milestone" />
            </div>
        </Layout>
    )
}

export default Home