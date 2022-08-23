// libraries
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

// styling
import '../styling/components/LineGraph.scss'

const LineGraph = () => {
    const graphData = [{name: 'Apr', rounds: 4}, {name: 'May', rounds: 5}, {name: 'Jun', rounds: 3}, {name: 'Jul', rounds: 7}, {name: 'Aug', rounds: 6}, {name: 'Sep', rounds: 2}]

    return(
        <div className='line-graph-container'>
                <LineChart
                    height={200}
                    width={350}
                    data={graphData}
                    margin={{ top: 0, right: 10, bottom: 0, left: 5 }}
                >
                    <Line strokeWidth={2} type="monotone" dataKey="rounds" stroke="#2ca7ff" dot={{stroke: '#0065ad', strokeWidth: 6}} />
                    <CartesianGrid stroke="#fff" strokeDasharray="5 500" />
                    <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
                    <YAxis dataKey="rounds" padding={{ bottom: 10, top: 10 }} />
                    <Tooltip />
                </LineChart>
        </div>
    )
}

export default LineGraph