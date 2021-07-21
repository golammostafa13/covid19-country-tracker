import React, {useState, useEffect} from 'react';
import {fetchDailyData} from '../../api/fetchData';
import styles from './Chart.module.css';
import {Line, Bar} from 'react-chartjs-2';
const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const loadDailyData = async () => {
            setDailyData(await fetchDailyData());
        }
        loadDailyData();
    }, [setDailyData]);

    const lineChart = (
        dailyData.length ?
        (<Line
        data={{
            labels: dailyData.map(data => data.date),
            datasets: [{
                data: dailyData.map(data => data.confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                backgroundColor: "rgba(0, 0, 255, 0.4)",
                fill: true
            },{
                data: dailyData.map(data => data.deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true
            }]
        }}
        ></Line>) : null
    );
    const barChart = (
        confirmed ?
        (<Bar
            data={{
                labels: ["Infected", "Recovered", "Deaths"],
                datasets: [{
                    data: [confirmed.value, recovered.value, deaths.value],
                    label: "People",
                    backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.7)', 'rgba(255, 0, 0, 0.8)'],
                }]
            }}
            options={{
                legend: {display: false},
                title: {display: true, text: `Current state in ${country}`}
            }}
        >
        </Bar>) : null
    )
    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
            {/* {lineChart} */}
        </div>
    );
};

export default Chart;