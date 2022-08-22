// libraries/helpers
import renderHeaderData from '../Helpers/RenderTableHeaderData'
import renderBodyData from '../Helpers/RenderTableBodyData'
import classList from '../Helpers/ClassesFromArray'
import { useState, useEffect } from 'react'

// styling
import '../styling/components/Table.scss'

const Table = (props) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 950)

    useEffect(() => {
        window.addEventListener("resize", () => {
            const mobile = window.innerWidth < 950;
            if (mobile !== isMobile) setIsMobile(mobile);
        }, false)
    }, [isMobile])

    return(
        <div className="table-container">
            <table className={ classList(props.classList) }>
                <thead>
                    <tr>
                    { renderHeaderData(props.headerColumns) }
                    </tr>
                </thead>
                <tbody>
                    { renderBodyData(props.bodyData, props.iconInfo, isMobile) }
                </tbody>
            </table>
        </div>
    )
}

export default Table