// components
import { ReactComponent as ArrowRightIcon } from '../../Assets/Icons/arrow-right-icon.svg'
import BtnPrimary from '../BtnPrimary'

// libraries/helpers
import renderHeaderData from '../../Helpers/RenderTableHeaderData'
import { renderInitialBodyData, renderAllBodyData} from '../../Helpers/RenderTableBodyData'
import classList from '../../Helpers/ClassesFromArray'
import { useState, useEffect } from 'react'

// styling
import './Table.scss'

const Table = (props) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 950)
    const [requestAdditionalData, setRequestAdditionalData] = useState(false)

    useEffect(() => {
        if (props.fullTable) {
            setRequestAdditionalData(true)
        }
    }, [props.fullTable])

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
        <>
            <div className="table-container">
                <table className={ classList(props.classList) }>
                    <thead className='table__head'>
                        <tr>
                        { renderHeaderData(props.headerColumns, props.hideIndex) }
                        </tr>
                    </thead>
                    <tbody className='table__body'>
                        {
                            requestAdditionalData
                            ?
                            renderAllBodyData(props.bodyData, props.iconInfo, isMobile, props.hideIndex)
                            :
                            renderInitialBodyData(props.bodyData, props.iconInfo, isMobile, props.hideIndex)
                        }
                    </tbody>
                </table>
            </div>
            {
                (props.bodyData.length > 10 && requestAdditionalData === false && props.fullTable !== true)
                ?
                    <div className="table-button-container">
                        <BtnPrimary
                            clickAction={getAdditionalData}
                            text="Show More"
                            icon={<ArrowRightIcon />}
                        />
                    </div>
                :
                    null
            }
        </>
    )
}

export default Table