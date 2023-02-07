// libraries
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

// styling
import './LineGraph.scss'

const LineGraph = (props) => {
    return(
        <div className='line-graph'>
                <h2 className='line-graph__heading'>{props.graphCaption}</h2>
                <LineChart
                    height={200}
                    width={350}
                    data={props.graphData}
                    margin={{ top: 0, right: 10, bottom: 0, left: 5 }}
                >
                    <Line
                        strokeWidth={2}
                        type="monotone"
                        dataKey={props.dataKey}
                        stroke="#2ca7ff"
                        dot={{stroke: '#0065ad', strokeWidth: 6}}
                    />
                    <CartesianGrid
                        stroke="#fff"
                        strokeDasharray="5 500"
                    />
                    <XAxis
                        dataKey="name"
                        padding={{ left: 10, right: 10 }}
                    />
                    <YAxis
                        dataKey={props.dataKey}
                        padding={{ bottom: 10, top: 10 }}
                    />
                    <Tooltip />
                </LineChart>
        </div>
    )
}

export default LineGraph