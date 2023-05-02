import React, { useRef, useState } from "react";
import Chart from "./Chart/index.js";
import Profile from "./Profile";


function HomeScreen({ message }) {
  const [titleHandle, setHandleTitle] = useState()

  const getThreshold = (title) => {
    const arr = JSON.parse(localStorage.getItem('infortree')) || []
    const item = arr.find(i => i.location.title === title)
    return item ? item : { nhietdo: 30, doam: 50, doamoxi: 30 }
  }

  const img = [
    { link: '/img/temp.png', title: "NHIỆT ĐỘ" },
    { link: '/img/humid.jpg', title: "ĐỘ ẨM" },
    { link: '/img/light.jpg', title: "ĐỘ ẨM ĐẤT" },
    { link: '/img/user.jpg', title: "User" }
  ]

  const handleProfile = useRef(null);
  const handleChart = useRef(null);

  const renderCardContent = (item) => {
    switch (item.title) {
      case "NHIỆT ĐỘ":
        return `${message.air_temperature} (M: ${getThreshold(item.title).nhietdo})`;
      case "ĐỘ ẨM":
        return `${message.air_humid} (M: ${getThreshold(item.title).doam})`;
      case "ĐỘ ẨM ĐẤT":
        return `${message.soil_moisture} (M: ${getThreshold(item.title).doamoxi})`;
      case "User":
        return "0";
      default:
        return "";
    }
  }

  const renderCards = () => {
    return img.map((item, index) => (
      <div
        key={index}
        className="flex items-center bg-white rounded-lg p-6 relative cursor-pointer border-2 border-blue-200 shadow-lg transform transition-all duration-200 hover:scale-105 hover:border-green-500"
        onClick={() => { setHandleTitle(item.title); }}
      >
        <div className="flex flex-1 flex-col" >
          <div className="flex flex-col">
            <h1 className="text-lg text-center font-semibold text-gray-700">{item.title}</h1>
            <span className="text-lg text-center font-bold text-blue-500">{renderCardContent(item)}</span>
          </div>
          <div className="text-center text-sm mt-2 text-gray-600 w-full">UPDATE 40s</div>
        </div>
        <img className="w-24 h-24 rounded-lg" src={item.link} alt="" />
      </div>
    ))
  };

  return (

    <div className="w-11/12 mx-auto my-10">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">WELCOME TO GREEN GARDEN!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {renderCards()}
        </div>
      </div>
      {<div><Chart ref={handleChart} titleHandle={titleHandle} /></div>}
    </div>
  );
}

export default HomeScreen;
