import { useNavigate } from 'react-router-dom'
import classes from './Control.module.scss'
function Control() {
    const img = [{
        link: "/img/anh/img_design/bap.png",
        title: "Bắp cải",
        temperature: "30",
        humidity: "20",
        humidityOxi: "60",
        timePump: "10 GIÂY",
        run: "Tưới"
    },
    {
        link: "/img/anh/img_design/bapcai.png",
        title: "Bắp cải",
        temperature: "30",
        humidity: "20",
        humidityOxi: "60",
        timePump: "10 Giây",
        run: "Tưới"
    },
    {
        link: "/img/anh/img_design/cam.png",
        title: "Cam",
        temperature: "30",
        humidity: "20",
        humidityOxi: "60",
        timePump: "10 Phút",
        run: "Tưới"
    },
    {
        link: "/img/anh/img_design/carot.png",
        title: "Cà rốt",
        temperature: "30",
        humidity: "20",
        humidityOxi: "60",
        timePump: "10 Phút",
        run: "Tưới"
    },
    {
        link: "/img/anh/img_design/man.png",
        title: "Mận",
        temperature: "30",
        humidity: "20",
        humidityOxi: "60",
        timePump: "10 Phút",
        run: "Tưới"
    },
    {
        link: "/img/anh/img_design/xoai.png",
        title: "Xoài",
        temperature: "30",
        humidity: "20",
        humidityOxi: "60",
        timePump: "10 Phút",
        run: "Tưới"
    }]
    const navigate = useNavigate()
    const handleNavigate = (link, title, temperature, humidity, humidityOxi, timePump, run) => {
        navigate('/infomation', { state: { link, title, temperature, humidity, humidityOxi, timePump, run } })

    }
    const handledelete = () => {
        localStorage.clear('datePump')
        setTimeout(() => {
            alert('Xóa thành công')
        }, 1500)

    }
    return (
        <div className={classes.main_Control}>
            <h1 className={classes.main_Control_title}>CÁC CÂY HIỆN CÓ TRONG VƯỜN</h1>
            <div className={classes.main_Control_container}>
                {img.map((item, index) => (<div key={index}>
                    <div onClick={() => { handleNavigate(item.link, item.title, item.temperature, item.humidity, item.humidityOxi, item.timePump, item.run) }} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <img style={{ cursor: "pointer", width: "300px", height: "200px", margin: "0px 10px" }} src={item.link} />
                        <h1 style={{ margin: "0 0 15px 0" }}>{item.title}</h1>
                    </div>
                </div>))}
            </div>
            <div onClick={handledelete} style={{ backgroundColor: "green", padding: "12px", borderRadius: "15px", cursor: "pointer", color: "white", fontSize: "20px" }}>Xóa toàn bộ thời gian tưới nước</div>
        </div>
    )
}

export default Control;