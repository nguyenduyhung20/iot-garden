import React, { useEffect, useRef, useState } from "react";
import Graph from "./graph";
import images from "../assets/images";
import classes from "../App.module.scss";
import Chart from "./Chart/index.js";
import Profile from "./Profile";
import anime from "animejs";
import DataDisplay from "./DataDisplay";
// const ControlsData = ({ message }) => {
//   const controlsData = [
//     {
//       img: images.temp,
//       name: "Nhiệt độ",
//       num: message.air_temperature,
//     },
//     {
//       img: images.humid,
//       name: "Độ ẩm",
//       num: message.air_humid,
//     },
//     {
//       img: images.humid,
//       name: "Độ ẩm đất",
//       num: message.soil_moisture,
//     },
//     {
//       img: images.user,
//       name: "User",
//       num: 0,
//     },
//   ];

//   return (
//     <div className={classes["control-container"]}>
//       {controlsData.map((data) => (
//         <Control image={data.img} num={data.num} name={data.name} />
//       ))}
//     </div>
//   );
// };

// const GraphsData = () => {
//   const graphsData = ["NHIỆT ĐỘ", "ĐỘ ẨM", "ĐỘ ẨM ĐẤT"];

//   return (
//     <div className={classes["graph-container"]}>
//       <div className={classes["graph-content"]}>
//         <img className={classes["image-item"]} src={images.gr_temp} alt="" />
//       </div>
//       <div className={classes.style}>
//         {graphsData.map((data) => (
//           <Graph name={data} />
//         ))}
//       </div>
//     </div>
//   );
// };


function HomeScreen({ message }) {
  const [titleHandle, setHandleTitle] = useState()

  const getThreshold = (title) => {
    const arr = JSON.parse(localStorage.getItem('infortree')) || []
    const item = arr.find(i => i.location.title === title)
    return item ? item : { nhietdo: 30, doam: 50, doamoxi: 30 }
  }

  // useEffect(() => {
  //   const threshold = getThreshold('NHIỆT ĐỘ')
  //   if (message.air_temperature > threshold.nhietdo) {
  //     alert('NHIỆT ĐỘ đang vượt quá giới hạn')
  //   }
  // }, [message.air_temperature])

  // useEffect(() => {
  //   const threshold = getThreshold('ĐỘ ẨM')
  //   if (message.air_humid > threshold.doam) {
  //     alert('ĐỘ ẨM đang vượt quá giới hạn')
  //   }
  // }, [message.air_humid])

  // useEffect(() => {
  //   const threshold = getThreshold('ĐỘ ẨM ĐẤT')
  //   if (message.soil_moisture < threshold.doamoxi) {
  //     alert('ĐỘ ẨM ĐẤT đang dưới mức giới hạn')
  //   }
  // }, [message.soil_moisture])


  const img = [
    { link: '/img/temp.png', title: "NHIỆT ĐỘ" }, { link: '/img/humid.jpg', title: "ĐỘ ẨM" },
    { link: '/img/light.jpg', title: "ĐỘ ẨM ĐẤT" }, { link: '/img/user.jpg', title: "User" }
  ]
  const handleProfile = useRef(null)
  const handleChart = useRef(null)


  return (

    <div style={{ width: "80vw" }}>

      <div>

        <h1>WELCOME TO GREEN GARDEN!</h1>
        <div style={{ display: "flex", width: "100%" }}>
          {img.map((item, index) => (

            <div key={index} style={{ margin: "0 25px", backgroundColor: "#FFFFFF", position: "relative" }}>
              <div style={{ position: "relative" }}>
                <div onClick={() => { setHandleTitle(item.title) }} className={classes.opa} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <h1 style={{ fontSize: "13px" }}>{item.title}</h1>

                  <img style={{ width: "100px", cursor: 'pointer', margin: "0 12px", borderRadius: "10px", }} src={item.link} />
                </div>
                <span style={{ position: "absolute", top: "54%", left: "16%", fontWeight: 600, fontSize: "15px" }}>
                  {/* {item.title === 'NHIỆT ĐỘ' ? message.air_temperature : item.title === 'ĐỘ ẨM' ? message.air_humid : item.title === 'ĐỘ ẨM ĐẤT' ? message.soil_moisture : item.title === 'User' ? '0' : ''} */}
                  {item.title === 'NHIỆT ĐỘ' ? `${message.air_temperature} (M: ${getThreshold(item.title).nhietdo})` : ''}
                  {item.title === 'ĐỘ ẨM' ? `${message.air_humid} (M: ${getThreshold(item.title).doam})` : ''}
                  {item.title === 'ĐỘ ẨM ĐẤT' ? `${message.soil_moisture} (M: ${getThreshold(item.title).doamoxi})` : ''}
                  {item.title === 'User' ? '0' : ''}
                </span>
              </div>
              <div style={{ textAlign: "center" }}>UPDATE 40s</div>
            </div>
          ))}

        </div>

        <div style={{ width: "80vw", height: "40px" }}></div>
      </div>
      {titleHandle === 'Use' ? <div ref={handleProfile}>< Profile /></div> : <div><Chart ref={handleChart} titleHandle={titleHandle} /></div>}

    </div>
  );
}

export default HomeScreen;
