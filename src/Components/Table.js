// components
import { ReactComponent as ArrowRightIcon } from '../Assets/Icons/arrow-right-icon.svg'
import BtnPrimary from './BtnPrimary'

// libraries/helpers
import renderHeaderData from '../Helpers/RenderTableHeaderData'
import { renderInitialBodyData, renderAllBodyData } from '../Helpers/RenderTableBodyData'
import classList from '../Helpers/ClassesFromArray'
import { useState, useEffect } from 'react'

// styling
import '../styling/components/Table.scss'

const Table = (props) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 950)
    const [requestAdditionalData, setRequestAdditionalData] = useState(false)

    useEffect(() => {
        window.addEventListener("resize", () => {
            const mobile = window.innerWidth < 950;
            if (mobile !== isMobile) setIsMobile(mobile);
        }, false)
    }, [isMobile])

    const getAdditionalData = () => {
        setRequestAdditionalData(true)
    }

    return(
        <div className="table-container-outer">
            <div className="table-container">
                <table className={ classList(props.classList) }>
                    <thead>
                        <tr>
                        { renderHeaderData(props.headerColumns) }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestAdditionalData
                            ?
                            renderAllBodyData(props.bodyData, props.iconInfo, isMobile)
                            :
                            renderInitialBodyData(props.bodyData, props.iconInfo, isMobile)
                        }
                    </tbody>
                </table>
            </div>
            {
                (props.bodyData.length > 10 && requestAdditionalData === false)
                ?
                    <div className="table-button-container">
                        {/* <button
                            className='btn-primary'
                            onClick={getAdditionalData}
                        >
                            <span className="btn-text">
                                Show More
                            </span>
                            <span className="btn-icon">
                                <ArrowRightIcon />
                            </span>
                        </button> */}
                        <BtnPrimary
                            clickAction={getAdditionalData}
                            text="Show More"
                            icon={<ArrowRightIcon />}
                        />
                    </div>
                :
                    null
            }
        </div>
    )
}

export default Table