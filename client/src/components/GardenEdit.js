import { useState } from 'react';
import axios from 'axios';


const GardenEdit = function ({ gardenDetails, garden, setGarden }) {
    const [tempGarden, setTempGarden] = useState({ ...garden });

    const updateTempGardenInfo = (key, value) => {
        setTempGarden({ ...tempGarden, [key]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`/api/v1/gardens/${garden.garden_ID}`, tempGarden)
            .then(response => {
                console.log('This is temp garden: ', tempGarden);
                setGarden(tempGarden);
            })
            .catch(console.log)
    }

    return (
        <>
            <div className='backdrop-filer bg-opacity-30 bg-blue-200 text-gray-800 p-3 font-semibold flex justify-between items-center rounded-lg shadow-lg border border-blue-300 transition-colors duration-200 hover:bg-blue-300 hover:text-white'>
                <span className='text-2xl tracking-tight font-extrabold'>
                    Edit Garden
                </span>
            </div>
            <form onSubmit={handleSubmit} className='my-3 space-y-4'>
                {garden !== null && gardenDetails.map((detail) => (
                    <div key={detail.value}>
                        <label htmlFor={detail.value} className='block font-semibold text-gray-900 text-lg mb-1'>
                            {detail.label}
                        </label>
                        <input
                            type="text"
                            id={detail.value}
                            placeholder={detail.label}
                            value={tempGarden[detail.value]}
                            onChange={(e) => updateTempGardenInfo(detail.value, e.target.value)}
                            className='w-full p-2 text-gray-800 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors duration-200'
                        />
                    </div>
                ))}
                <button type="submit" className='mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200 focus:outline-none'> Confirm Change</button>
            </form>
        </>
    );

}

export default GardenEdit;