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

    // const MyFunc = () => {
    //     if (props.scorecards) {
    //         for (let i = 0; i < props.bodyData.length; i++) {
    //             // console.log(props.bodyData[i])
    //             if (props.bodyData[i].holeByHole ) {
    //                 props.bodyData[i].stats = true
    //             } else if (props.bodyData[i].advancedStats) {
    //                 props.bodyData[i].stats = true
    //             } else {
    //                 props.bodyData[i].stats = false
    //             }
    //             delete props.bodyData[i].holeByHole
    //             delete props.bodyData[i].advancedStats

    //             console.log(props.bodyData[i])
    //         }
    //     }
    // }
    // MyFunc()

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
        <div className="table-container-outer">
            <div className="table-container">
                <table className={ classList(props.classList) }>
                    <thead>
                        <tr>
                        { renderHeaderData(props.headerColumns, props.hideIndex) }
                        </tr>
                    </thead>
                    <tbody>
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
        </div>
    )
}

export default Table