import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = props => {
    return <div className="chart">
        {props.datapoints.map(datapoint => (
            <ChartBar
                value={datapoint.value}
                key={datapoint.label}
                maxValue={null}
                label={datapoint.label}
            />))}
    </div>
}

export default Chart;