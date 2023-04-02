import React from "react";
import Control from "./control";
import Graph from "./graph";
import images from "../assets/images";
import classes from "../App.module.scss";

const ControlsData = ({ message }) => {
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

  return (
    <div className={classes["control-container"]}>
      {controlsData.map((data) => (
        <Control image={data.img} num={data.num} name={data.name} />
      ))}
    </div>
  );
};

const GraphsData = () => {
  const graphsData = ["NHIỆT ĐỘ", "ĐỘ ẨM", "ĐỘ ẨM ĐẤT"];

  return (
    <div className={classes["graph-container"]}>
      <div className={classes["graph-content"]}>
        <img className={classes["image-item"]} src={images.gr_temp} alt="" />
      </div>
      <div className={classes.style}>
        {graphsData.map((data) => (
          <Graph name={data} />
        ))}
      </div>
    </div>
  );
};

function HomeScreen({ message }) {
  return (
    <div>
      <div>
        <h1>WELLCOME TO GREEN GARDEN!</h1>
      </div>
      <ControlsData message={message} />
      <GraphsData />
    </div>
  );
}

export default HomeScreen;
