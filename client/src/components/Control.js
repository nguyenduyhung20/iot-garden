import { useNavigate } from 'react-router-dom'
// import classes from './Control.module.scss'
import Button from './Button';
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
    const navigate = useNavigate();

    const handleNavigate = (link, title, temperature, humidity, humidityOxi, timePump, run) => {
        navigate('/infomation', { state: { link, title, temperature, humidity, humidityOxi, timePump, run } })
    }

    const handleDelete = () => {
        localStorage.removeItem('datePump')
        setTimeout(() => {
            alert('Xóa thành công')
        }, 1500)
    }

    return (
        <div className="m-10">
            <h1 className="text-4xl font-bold m-10 text-center">CÁC CÂY HIỆN CÓ TRONG VƯỜN</h1>
            <div className="flex flex-wrap justify-center items-center gap-10">
                {img.map((item, index) => (
                    <div key={index} className='flex flex-col items-center cursor-pointer space-y-4  transform transition-transform duration-500 hover:scale-105'>
                        <div
                            onClick={() => { handleNavigate(item.link, item.title, item.temperature, item.humidity, item.humidityOxi, item.timePump, item.run) }} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <img className='w-72 h-48 rounded-lg shadow-lg' src={item.link} alt=''/>
                            <h1 className='font-semibold text-xl'>{item.title}</h1>
                        </div>
                    </div>))}
            </div>
            <div onClick={handleDelete} className='flex justify-center items-center mt-8'>
                <Button onClick={handleDelete} text={"Xóa toàn bộ thời gian tưới nước"} color="green"/>
                </div>
        </div>
    )
}

export default Control;