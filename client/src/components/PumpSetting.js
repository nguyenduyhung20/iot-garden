import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

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
        <div style={{ display: 'flex', margin: "0 0 0 50px", height: "100%" }}>

            <div style={{ height: "100%" }}>
                <h1>{location.title}</h1>
                <img style={{ height: "350px" }} src={location.link} />
            </div>
            <div style={{ height: "100%" }} >
                <div style={{ width: "100px", height: "80px" }}></div>
                <div>
                    <h2 style={{ margin: "20px" }}>
                        Nhiệt độ
                    </h2>
                    <div style={{ display: "flex" }}>
                        <div style={{ padding: "0px 12px", cursor: "pointer", marginLeft: "20px" }}>Giá trị thiết lập: {nhietdo}</div>

                        <div onClick={() => {
                            if (nhietdo === 0) {
                                setNhietdo(0)
                            } else {
                                setNhietdo(nhietdo - 1)
                            }

                        }} style={{ padding: "0px 12px", cursor: "pointer", backgroundColor: "#b9b5b5bd", borderRadius: "3px" }}>-</div>
                        <div onClick={() => {
                            setNhietdo(nhietdo + 1)
                        }} style={{ padding: "0px 12px", cursor: "pointer", margin: "0 15px", borderRadius: "3px", backgroundColor: "#b9b5b5bd" }}>+</div>
                    </div>


                </div>
                <div>
                    <h2 style={{ margin: "20px" }}>
                        Độ ẩm đất
                    </h2>
                    <div style={{ display: "flex" }}>
                        <div style={{ padding: "0px 12px", cursor: "pointer", marginLeft: "20px" }}>Giá trị thiết lập: {doam}</div>
                        <div onClick={() => {
                            if (doam === 0) {
                                setDoam(0)
                            } else {
                                setDoam(doam - 1)
                            }

                        }} style={{ padding: "0px 12px", cursor: "pointer", backgroundColor: "#b9b5b5bd", borderRadius: "3px" }}>-</div>
                        <div onClick={() => {
                            setDoam(doam + 1)
                        }} style={{ padding: "0px 12px", cursor: "pointer", margin: "0 15px", borderRadius: "3px", backgroundColor: "#b9b5b5bd" }}>+</div>
                    </div>


                </div>
                <div>
                    <h2 style={{ margin: "20px" }}>
                        Độ ẩm không khí
                    </h2>
                    <div style={{ display: "flex" }}>
                        <div style={{ padding: "0px 12px", cursor: "pointer", marginLeft: "20px" }}>Giá trị thiết lập: {doamoxi}</div>
                        <div onClick={() => {
                            if (doamoxi === 0) {
                                setDoamoxi(0)
                            } else {
                                setDoamoxi(doamoxi - 1)
                            }

                        }} style={{ padding: "0px 12px", cursor: "pointer", backgroundColor: "#b9b5b5bd", borderRadius: "3px" }}>-</div>
                        <div onClick={() => {
                            setDoamoxi(doamoxi + 1)
                        }} style={{ padding: "0px 12px", cursor: "pointer", margin: "0 15px", borderRadius: "3px", backgroundColor: "#b9b5b5bd" }}>+</div>
                    </div>


                </div>
                <div style={{ display: "flex", marginTop: "54px", marginLeft: "12px" }}>
                    <div onClick={handleReset} style={{ padding: "10px 30px", cursor: "pointer", backgroundColor: "#b9b5b5bd", borderRadius: "3px", margin: "0 5px" }}>Reset</div>
                    <div onClick={handleUpdate} style={{ padding: "10px 30px", cursor: "pointer", backgroundColor: "#b9b5b5bd", borderRadius: "3px", margin: "0 5px" }}>Update</div>
                </div>
            </div>
        </div>
    )
}

export default PumpSetting