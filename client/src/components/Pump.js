import React from 'react'
import { useLocation } from 'react-router-dom'
// import classes from './InfomationTree.module.scss'
import moment from 'moment'
import axios from 'axios';
const Pump = () => {
  const location = useLocation().state.location

  const DD = moment().format('DD')
  const MM = moment().format('MM')
  const YYYY = moment().format('YYYY')
  const HH = moment().format('HH')
  const mm = moment().format('mm')
  const pumpD = JSON.parse(localStorage.getItem('datePump')) ? JSON.parse(localStorage.getItem('datePump')) : []
  const handlePump = (e) => {
    e.preventDefault();
    const arr = [{ type: `${location.title}`, date: `Ngày tưới cây cuối cùng ${HH} Giờ ${mm} phút ngày ${DD} tháng ${MM} năm ${YYYY} ` }]
    const concatArr = [...arr, ...pumpD]
    localStorage.setItem('datePump', JSON.stringify(concatArr))

    // Send a POST request to your backend
    const startPump = async () => {
      try {
        const response = await axios.post('/startPump', {
          pump: location.title
        });
        console.log(response);
      } catch (error) {
        console.error("Error starting pump");
      }
    }

    startPump();

    window.location.reload()
  }

  return (
    <div className='w-full max-w-5xl bg-white bg-opacity-90 p-6 rounded-lg shadow-lg space-y-6 mx-auto mt-5 overflow-hidden'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold text-gray-800'>{location.title}</h1>
      </div>
      <div className='flex items-center space-x-6'>
        <div className='w-1/2'>
          <img className='w-full h-auto rounded-lg shadow-lg' src={location.link} alt='' />
        </div>
        <div className='w-1/2 flex flex-col space-y-4 p-4'>
          <h5 className='font-medium text-lg text-gray-700'>Pump Water</h5>
          <h5 className='font-medium text-lg text-gray-700'>Thời gian tưới <span className='inline-block px-3 py-1 rounded-md bg-gray-300 text-gray-800'>{location.timePump}</span></h5>
          <div onClick={(e) => { handlePump(e) }} className='my-2 w-20 text-center cursor-pointer bg-green-400 rounded-md py-2 text-black text-xl'>{location.run}</div>
          <h5 className='font-medium text-lg text-gray-700'>Lịch sử tưới</h5>
          {pumpD.filter(item => item.type === location.title).slice(0, 5).map((item, index) => (
            <div key={index} className='text-gray-800'>
              {item.date}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

}

export default Pump;