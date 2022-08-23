import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

const LineGraph = () => {
    const graphData = [{name: 'Apr', rounds: 4}, {name: 'May', rounds: 5}, {name: 'Jun', rounds: 3}, {name: 'Jul', rounds: 7}, {name: 'Aug', rounds: 6}, {name: 'Sep', rounds: 2}]

    return(
        <div className='graph-container'>
            <LineChart width={600} height={300} data={graphData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                <Line type="monotone" dataKey="rounds" stroke="#003459" />
                <CartesianGrid stroke="#fff" strokeDasharray="5 500" />
                <XAxis dataKey="name" />
                <YAxis dataKey="rounds" />
                <Tooltip />
            </LineChart>
        </div>
    )
}

export default LineGraph