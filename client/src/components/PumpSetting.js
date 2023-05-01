import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
    faPlus,
    faMinus
} from '@fortawesome/free-solid-svg-icons'

const ThresholdSetting = ({ title, value, setValue }) => {
    return (
        <div className='bg-white shadow rounded-lg p-4 mb-6 transition-all duration-500 ease-in-out transform hover:scale-105'>
            <h2 className='font-semibold text-lg mb-2'>{title}</h2>
            <div className='flex items-center space-x-3'>
                <div className='text-gray-700'>Giá trị thiết lập: {value}</div>
                <div onClick={() => setValue(Math.max(0, value - 1))}
                    className='px-2 py-1 bg-green-200 text-green-700 rounded-full flex items-center'>
                    <FontAwesomeIcon icon={faMinus} />
                </div>
                <div onClick={() => setValue(Math.min(100, value + 1))}
                    className='px-2 py-1 bg-green-200 text-green-700 rounded-full flex items-center'>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
            </div>
        </div>
    )
}

const Button = ({ onClick, text, color }) => {
    const baseClass = "px-5 py-2 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105";
    const colorClass = `bg-${color}-200 text-${color}-700`;
    return (
        <button onClick={onClick} className={`${baseClass} ${colorClass}`}>
            {text}
        </button>
    );
};

const PumpSetting = () => {
    const location = useLocation().state.location

    const arr = JSON.parse(localStorage.getItem('infortree')) ? JSON.parse(localStorage.getItem('infortree')) : []
    const currentItem = arr.find(item => item.location && item.location.title === location.title) || { nhietdo: 0, doam: 0, doamoxi: 0 }

    const [nhietdo, setNhietdo] = useState(currentItem.nhietdo)
    const [doam, setDoam] = useState(currentItem.doam)
    const [doamoxi, setDoamoxi] = useState(currentItem.doamoxi)
    const handleReset = () => {
        setNhietdo(0)
        setDoam(0)
        setDoamoxi(0)
        const filterArr = arr.filter(item => {
            if (item.location) {
                return item.location.title !== location.title
            }
        })
        localStorage.setItem('infortree', JSON.stringify(filterArr))
        alert(`Xóa thành công thông tin loại cây ${location.title}`)
    }

    const handleUpdate = () => {
        arr.push({ nhietdo, doam, doamoxi, location })
        localStorage.setItem('infortree', JSON.stringify(arr))
        alert('Update thành công')
    }
    return (
        <div className='flex w-full max-w-5xl h-full space-x-6 justify-around ml-10'>

            <div className='h-full'>
                <h1 className='font-semibold text-3xl'>{location.title}</h1>
                <img className='h-96 rounded-lg shadow-lg' src={location.link} alt=''/>
            </div>
            <div className='h-full mt-4' >
                <div style={{ width: "100px", height: "80px" }}></div>
                <ThresholdSetting title="Nhiệt độ" value={nhietdo} setValue={setNhietdo} />
                <ThresholdSetting title="Độ ẩm đất" value={doam} setValue={setDoam} />
                <ThresholdSetting title="Độ ẩm không khí" value={doamoxi} setValue={setDoamoxi} />

                <div className='flex justify-around mt-4'>
                    <Button onClick={handleReset} text="Reset" color="gray" />
                    <Button onClick={handleUpdate} text="Update" color="blue" />
                </div>
            </div>
        </div>
    )
}

export default PumpSetting