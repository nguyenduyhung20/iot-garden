import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
    faPlus,
    faMinus
} from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import axios from 'axios';

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

const parseNumericString = (str) => {
    const num = parseFloat(str);
    return isNaN(num) ? 0 : num;
};


const PumpSetting = () => {
    const location = useLocation().state.location
    const gardenId = parseInt(localStorage.getItem('gardenId'));

    // const arr = JSON.parse(localStorage.getItem('infortree')) ? JSON.parse(localStorage.getItem('infortree')) : []
    // const currentItem = arr.find(item => item.location && item.location.title === location.title) || { nhietdo: 0, doam: 0, doamoxi: 0 }
    // const [nhietdo, setNhietdo] = useState(currentItem.nhietdo)
    // const [doam, setDoam] = useState(currentItem.doam)
    // const [doamoxi, setDoamoxi] = useState(currentItem.doamoxi)

    const [nhietdo, setNhietdo] = useState(null);
    const [doam, setDoam] = useState(null);
    const [doamoxi, setDoamoxi] = useState(null);

    useEffect(() => {
        if (nhietdo === null || doam === null || doamoxi === null) {
            axios.get(`/api/v1/condition/${gardenId}`)
                .then(response => {
                    const conditionData = response.data[0];
                    console.log('this is condition data:', conditionData);
                    const tempNhietdo = parseNumericString(conditionData.condition_Temp);
                    const tempDoam = parseNumericString(conditionData.condition_Amdat);
                    const tempDoamoxi = parseNumericString(conditionData.condition_Humid);

                    console.log('Parsed values:', tempNhietdo, tempDoam, tempDoamoxi);

                    setNhietdo(tempNhietdo);
                    setDoam(tempDoam);
                    setDoamoxi(tempDoamoxi);

                    console.log('====================================');
                    console.log('This is garden response: ', response.data);
                    console.log('====================================');
                })
                .catch(console.log);
        }

    }, [nhietdo, doam, doamoxi, gardenId]);

    console.log('This is after fetch: ', nhietdo, doam, doamoxi);
    const handleUpdate = () => {

        axios.put(`/api/v1/condition/${gardenId}`, {
            condition_Temp: nhietdo.toString(),
            condition_Amdat: doam.toString(),
            condition_Humid: doamoxi.toString()
        })
            .then(response => {
                alert('Update thành công')
            })
            .catch(error => {
                console.error('Error updating data: ', error);
            })
    };

    const handleReset = () => {
        setNhietdo(0);
        setDoam(0);
        setDoamoxi(0);

        handleUpdate();
        alert(`Xóa thành công thông tin loại cây ${location.title}`);
    };

    return (
        <div className='w-full max-w-5xl bg-white bg-opacity-90 p-6 rounded-lg shadow-lg justify-around mx-auto mt-5'>
            <div className='h-full '>
                <h1 className='font-bold text-4xl text-center text-gray-800'>{location.title}</h1>
            </div>
            <div className='h-full flex items-center space-x-6' >
                <div className='w-1/2'>
                    <img className='w-full h-auto rounded-lg shadow-lg' src={location.link} alt='' />
                </div>

                <div className='w-1/2 flex flex-col mt-6 p-4'>
                    <ThresholdSetting title="Nhiệt độ" value={nhietdo} setValue={setNhietdo} />
                    <ThresholdSetting title="Độ ẩm đất" value={doam} setValue={setDoam} />
                    <ThresholdSetting title="Độ ẩm không khí" value={doamoxi} setValue={setDoamoxi} />
                    <div className='flex space-x-3 mx-auto'>
                        <Button onClick={handleReset} text="Reset" color="gray" />
                        <Button onClick={handleUpdate} text="Update" color="green" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PumpSetting