import React, { useState, useEffect } from "react";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'
import GraphButton from './GraphButton'
import moment from 'moment/moment';
ChartJS.register(
    LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend
)

const Chart = ({ titleHandle }) => {
    const dateNow = Number(moment().day())
    const [type, setType] = useState('NHIỆT ĐỘ')
    const [data, setData] = useState(Array(7).fill().map((_, i) => ({
        temperature: [28, 33, 32, 29, 36, 39],
        humidity: [28, 33, 32, 29, 2, 39],
        soilHumidity: [28, 22, 32, 29, 36, 39]
    })))

    useEffect(() => {
        setData(prevData => prevData.map((item, index) => ({
            ...item,
            hidden: index !== dateNow
        })))
    }, [dateNow])
    

    const handleType = e => {
        setType(e)
    }

    const graphsData = ["NHIỆT ĐỘ", "ĐỘ ẨM", "ĐỘ ẨM ĐẤT"]
    const datas = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: data.map((item, index) => ({
            label: `Thứ ${index + 2}`,
            data: type === 'NHIỆT ĐỘ' ? item.temperature : type === 'ĐỘ ẨM' ? item.humidity : item.soilHumidity,
            borderColor: "black",
            tension: 0.4,
            hidden: item.hidden
        }))
    }

    return (
        <div className="flex flex-col lg:flex-row justify-around items-center lg:space-x-10">
            <div className="w-full lg:w-3/4">
                <div className="w-full bg-white p-5 shadow-md rounded-md border-2 border-blue-200 transition-color duration-200 hover:border-green-200">
                    <Line data={datas} />
                </div>

                <div className="text-center my-4 items-center">
                    <h3 className="text-2xl font-bold border-1 border-gray-500 ">{type}</h3>
                </div>
            </div>
            <div className="flex flex-col items-center space-y-4 w-full lg:w-1/4">
                {graphsData.map(data => (
                    <GraphButton handleType={handleType} name={data} />
                ))}
            </div>
        </div>
    )
}

export default Chart
