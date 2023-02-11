// components
import Layout from "../Layout"
import BtnSecondary from "../Components/BtnSecondary/BtnSecondary"
import { ReactComponent as PlusIconLight } from "../../src/Assets/Icons/plus-icon-light.svg"
import Modal from "../Components/Modal"
import Button from "react-bootstrap/Button"

// libraries/helpers
import { useState } from "react"

// styling
import '../styling/Home.scss'

const Home = () => {

    const [modalShow, setModalShow] = useState(false)
    // const [formTitle, setFormTitle] = useState(null)
    // const [formType, setFormType] = useState(null)

    return(
        <Layout>
            <h1>
                Add a new...
            </h1>
            <div className="forms-button-container">
                <BtnSecondary
                    text="Round"
                    icon={<PlusIconLight />}
                    onClick={() => setModalShow(true)}
                />
                <Button
                    variant="primary"
                    onClick={() => setModalShow(true)}
                    className="no-style"
                >
                    <BtnSecondary
                        text="Course Played"
                        icon={<PlusIconLight />}
                    />
                </Button>
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
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Add a course"
                type="course form"
            />
        </Layout>
    )
}

export default Home