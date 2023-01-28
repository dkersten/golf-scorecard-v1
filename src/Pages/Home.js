// components
import Layout from "../Layout"
import BtnSecondary from "../Components/BtnSecondary"
// import ArrowRightIcon from "../../src/Assets/Icons/arrow-right-light-icon.svg"
import { ReactComponent as PlusIconLight } from '../../src/Assets/Icons/plus-icon-light.svg'

// styling
import '../styling/Home.scss'

const Home = () => {
    return(
        <Layout>
            <h1>
                Add a new...
            </h1>
            <div className="forms-button-container">
                <BtnSecondary
                    text="Round"
                    icon={<PlusIconLight />}
                />
                <BtnSecondary
                    text="Course Played"
                    icon={<PlusIconLight />}
                />
                <BtnSecondary
                    text="Set Yardages"
                    icon={<PlusIconLight />}
                />
                <BtnSecondary
                    text="Seasonal Goal"
                    icon={<PlusIconLight />}
                />
                <BtnSecondary
                    text="Milestone"
                    icon={<PlusIconLight />}
                />
            </div>
        </Layout>
    )
}

export default Home