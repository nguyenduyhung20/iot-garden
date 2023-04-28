import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import classes from './InfomationTree.module.scss'
function InfomationTree({ message }) {
  const location = useLocation().state

  

  const navigate = useNavigate()
  const handlePump = () => {
    navigate('/pumpWater', { state: { location } })
  }
  const handleSetting = () => {
    navigate('/pumpSetting', { state: { location } })
  }
  return (
    <div className={classes.mainInfomationTree}>
      <div className={classes.mainInfomationTree_title}>
        <h1>{location.title}</h1>
      </div>
      <div className={classes.mainInfomationTree_container}>
        <img width={500} src={location.link} />

        <div style={{ marginLeft: "100px", height: 350, display: "flex", flexDirection: "column", justifyContent: "space-between" }} className={classes.mainInfomationTree_containers}>
          <h5>Nhiệt độ {message.air_temperature} độ C</h5>
          <h5>Độ ẩm đất {message.air_humid} %</h5>
          <h5>Độ ẩm không khí {message.soil_moisture} %</h5>
          <div onClick={() => { handleSetting() }} style={{ cursor: "pointer", backgroundColor: "#7edd6c", borderRadius: "5px", padding: "10px", color: "black", fontSize: 20 }}>Setting Parameter</div>
          <div onClick={() => { handlePump() }} style={{ cursor: "pointer", backgroundColor: "#7edd6c", borderRadius: "5px", padding: "10px", color: "black", fontSize: 20 }}>Pump water</div>
        </div>
      </div>
    </div>


  )
}

export default InfomationTree