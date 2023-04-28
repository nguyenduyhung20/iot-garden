import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, Title, plugins } from 'chart.js'
import { Line } from 'react-chartjs-2'
import Graph from '../graph'
import classes from "../../App.module.scss";
import moment from 'moment/moment';
ChartJS.register(
    LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend
)
const Chart = (props) => {
    const { titleHandle } = props
    const dateNow = Number(moment().day())
    //nhiet do
    const [Day2, setDay2] = useState([28, 33, 32, 29, 36, 39])
    const [Day3, setDay3] = useState([27, 28, 32, 29, 36, 39])
    const [Day4, setDay4] = useState([22, 26, 32, 29, 26, 39])
    const [Day5, setDay5] = useState([32, 29, 32, 40, 36, 34])
    const [Day6, setDay6] = useState([28, 26, 32, 29, 36, 39])
    const [Day7, setDay7] = useState([34, 33, 32, 29, 31, 36])
    const [Day8, setDay8] = useState([38, 26, 32, 29, 36, 29])
    const [type, setType] = useState('NHIỆT ĐỘ')
    const nhietdo = [{
        id: 1,
        label: "Thứ 2",
        data: Day2,
        borderColor: "black",
        tension: 0.4,
        hidden: true,

    }, {
        id: 2,
        label: "Thứ 3",
        data: Day3,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 3,
        label: "Thứ 4",
        data: Day4,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 4,
        label: "Thứ 5",
        data: Day5,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }, {
        id: 5,
        label: "Thứ 6",
        data: Day6,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 5,
        label: "Thứ 7",
        data: Day7,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }, {
        id: 5,
        label: "Chủ nhật",
        data: Day8,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }]
    nhietdo.forEach(item => {
        if (item.id === dateNow) {
            item.hidden = false
        }
    })
    //do am
    const [Day2Humidity, setDay2Humidity] = useState([28, 33, 32, 29, 2, 39])
    const [Day3Humidity, setDay3Humidity] = useState([63, 28, 32, 29, 36, 39])
    const [Day4Humidity, setDay4Humidity] = useState([22, 26, 3, 29, 26, 39])
    const [Day5Humidity, setDay5Humidity] = useState([32, 29, 32, 4, 36, 34])
    const [Day6Humidity, setDay6Humidity] = useState([28, 26, 32, 11, 36, 39])
    const [Day7Humidity, setDay7Humidity] = useState([22, 33, 32, 29, 31, 23])
    const [Day8Humidity, setDay8Humidity] = useState([38, 26, 32, 29, 36, 29])


    const doam = [{
        id: 1,
        label: "Thứ 2",
        data: Day2Humidity,
        borderColor: "black",
        tension: 0.4,
        hidden: true,

    }, {
        id: 2,
        label: "Thứ 3",
        data: Day3Humidity,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 3,
        label: "Thứ 4",
        data: Day4Humidity,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 4,
        label: "Thứ 5",
        data: Day5Humidity,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }, {
        id: 5,
        label: "Thứ 6",
        data: Day6Humidity,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 5,
        label: "Thứ 7",
        data: Day7Humidity,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }, {
        id: 5,
        label: "Chủ nhật",
        data: Day8Humidity,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }]
    doam.forEach(item => {
        if (item.id === dateNow) {
            item.hidden = false
        }
    })
    //doam
    //do am dat
    const [Day2soil, setDay2soil] = useState([28, 22, 32, 29, 36, 39])
    const [Day3soil, setDay3soil] = useState([27, 28, 32, 19, 36, 39])
    const [Day4soil, setDay4soil] = useState([22, 26, 32, 29, 26, 39])
    const [Day5soil, setDay5soil] = useState([12, 29, 22, 40, 36, 34])
    const [Day6soil, setDay6soil] = useState([28, 26, 32, 29, 36, 39])
    const [Day7soil, setDay7soil] = useState([34, 33, 31, 29, 31, 22])
    const [Day8soil, setDay8soil] = useState([38, 26, 32, 29, 36, 29])


    const doamdat = [{
        id: 1,
        label: "Thứ 2",
        data: Day2soil,
        borderColor: "black",
        tension: 0.4,
        hidden: true,

    }, {
        id: 2,
        label: "Thứ 3",
        data: Day3soil,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 3,
        label: "Thứ 4",
        data: Day4soil,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 4,
        label: "Thứ 5",
        data: Day5soil,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }, {
        id: 5,
        label: "Thứ 6",
        data: Day6soil,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    },
    {
        id: 5,
        label: "Thứ 7",
        data: Day7soil,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }, {
        id: 5,
        label: "Chủ nhật",
        data: Day8soil,
        borderColor: "black",
        tension: 0.4,
        hidden: true
    }]
    doamdat.forEach(item => {
        if (item.id === dateNow) {
            item.hidden = false
        }
    })
    const datas = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: type === 'NHIỆT ĐỘ' ? nhietdo : type === 'ĐỘ ẨM' ? doam : type === 'ĐỘ ẨM ĐẤT' ? doamdat : []
    }
    const graphsData = ["NHIỆT ĐỘ", "ĐỘ ẨM", "ĐỘ ẨM ĐẤT"];
    console.log(titleHandle)
    // useEffect(() => {
    //     if (titleHandle) {
    //         setType(titleHandle)
    //     }

    // }, [titleHandle])
    const handleType = (e) => {
        setType(e)

    }


    if (type === 'NHIỆT ĐỘ') {
        return (
            <div style={{ display: "inline-block", display: 'flex', justifyContent: "space-around" }}>
                <div >
                    <div style={{ boxSizing: "border-box", display: "block", height: "350px", width: "700px" }}><Line data={datas} /></div>

                    <div><h3 style={{ position: "absolute", left: "40%" }}>{type}</h3></div>
                </div>
                <div >
                    {graphsData.map((data) => (
                        <Graph handleType={handleType} name={data} />
                    ))}
                </div>

            </div>
        )
    }
    else if (type === 'ĐỘ ẨM') {
        return (
            <div style={{ display: "inline-block", display: 'flex', justifyContent: "space-around" }}>
                <div >
                    <div style={{ boxSizing: "border-box", display: "block", height: "350px", width: "700px" }}><Line data={datas} /></div>

                    <div><h3 style={{ position: "absolute", left: "40%" }}>{type}</h3></div>
                </div>
                <div >
                    {graphsData.map((data) => (
                        <Graph handleType={handleType} name={data} />
                    ))}
                </div>


            </div>
        )
    }
    else if (type === 'ĐỘ ẨM ĐẤT') {
        return (
            <div style={{ display: "inline-block", display: 'flex', justifyContent: "space-around" }}>
                <div >
                    <div style={{ boxSizing: "border-box", display: "block", height: "350px", width: "700px" }}><Line data={datas} /></div>

                    <div><h3 style={{ position: "absolute", left: "40%" }}>{type}</h3></div>
                </div>
                <div >
                    {graphsData.map((data) => (
                        <Graph handleType={handleType} name={data} />
                    ))}
                </div>


            </div>
        )
    }

}

export default Chart