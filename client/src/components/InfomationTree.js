import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import classes from './InfomationTree.module.scss'
import Button from './Button'
function InfomationTree({ message }) {
  const location = useLocation().state

  const navigate = useNavigate();

  const handlePump = () => {
    navigate('/pumpWater', { state: { location } })
  }

  const handleSetting = () => {
    navigate('/pumpSetting', { state: { location } })
  }

  return (
    <div className='w-full max-w-6xl bg-white border-2 border-blue-200 p-6 rounded-lg shadow-lg space-y-6 mx-auto mt-5 overflow-hidden'>
      <div className='text-center '>
        <h1 className='text-4xl font-bold text-gray-800'>{location.title}</h1>
      </div>
      <div className='flex items-center space-x-6'>
        <div className='w-1/2'>
          <img className='w-full h-auto rounded-lg shadow-lg border-2 border-blue-200' src={location.link} alt='' />
        </div>
        <div className='w-1/2 flex flex-col space-y-4 p-4 bg-white border-2 border-blue-200 shadow rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hover:border-green-500'>
          <h5 className='font-medium text-lg text-gray-700'>Nhiệt độ: <span className='font-bold'>{message.air_temperature} độ C</span></h5>
          <h5 className='font-medium text-lg text-gray-700'>Độ ẩm đất: <span className='font-bold'>{message.air_humid} %</span></h5>
          <h5 className='font-medium text-lg text-gray-700'>Độ ẩm không khí: <span className='font-bold'>{message.soil_moisture} %</span></h5>
          <Button onClick={handleSetting} text="Setting Parameter" color="green" />
          <Button onClick={handlePump} text="Pump water" color="green" />
        </div>
      </div>
    </div>
  );

}

export default InfomationTree