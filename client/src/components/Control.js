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
        <div className="m-10 w-4/5 mx-auto bg-green-50 p-10 rounded-lg">
            <h1 className="text-4xl font-bold mb-10 text-center">CÁC CÂY HIỆN CÓ TRONG VƯỜN</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {img.map((item, index) => (
                    <div key={index}
                        className='flex flex-col items-center cursor-pointer bg-white rounded-lg shadow-lg border-2 border-blue-200 transform transition-all duration-200 hover:scale-105 hover:border-green-500'
                        onClick={() => { handleNavigate(item.link, item.title, item.temperature, item.humidity, item.humidityOxi, item.timePump, item.run) }}
                    >
                        <div className='aspect-w-3 aspect-h-2 w-full'>
                            <img className='mt-4 mx-auto w-72 h-48 rounded-lg' src={item.link} alt='' />
                        </div>
                        
                        <h1 className='m-5 font-semibold text-xl'>{item.title}</h1>
                    </div>))}
            </div>
            <div onClick={handleDelete} className='flex justify-center items-center mt-8'>
                <Button onClick={handleDelete} text={"Xóa toàn bộ thời gian tưới nước"} color="green" />
            </div>
        </div>
    )
}

export default Control;