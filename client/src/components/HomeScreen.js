import React from "react";
import Control from "./control";
import Graph from "./graph";
import images from "../assets/images";
import classes from "../App.module.scss";

function HomeScreen({ message }) {
  const controlsData = [
    {
      img: images.temp,
      name: "Nhiệt độ",
      num: message.air_temperature,
    },
    {
      img: images.humid,
      name: "Độ ẩm",
      num: message.air_humid,
    },
    {
      img: images.humid,
      name: "Độ ẩm đất",
      num: message.soil_moisture,
    },
    {
      img: images.user,
      name: "User",
      num: 0,
    },
  ];

  const graphsData = ["NHIỆT ĐỘ", "ĐỘ ẨM", "ĐỘ ẨM ĐẤT"];

  return (
<div>
        <div>
          <h1>WELLCOME TO GREEN GARDEN!</h1>
        </div>
        <div  className={classes["control-container"]}    >
          {controlsData.map(data => (
            <Control image={data.img} num={data.num} name={data.name} />
          ))}
        </div>
          <div className={classes["graph-container"]}>
            <div className={classes["graph-content"]}>
              <img className={classes["image-item"]} src={images.gr_temp} alt=""></img>
            </div>
            <div className={classes.style}>
              {graphsData.map(data => (
                <Graph name={data} />
              ))}
            </div>
          </div>
      </div>
  );
}

export default HomeScreen;
