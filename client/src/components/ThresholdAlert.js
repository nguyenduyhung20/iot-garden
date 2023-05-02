import  { useEffect } from "react";
import axios from 'axios';
import { notification } from "antd";

const ThresholdAlert = ({ latestMessage, gardenId }) => {
    // latestMessage = {
    //     air_temprature: "28.5", // degrees Celsius
    //     air_humid: "45", // percentage
    //     soil_moisture: "10" // arbitrary units
    // };

    useEffect(() => {
        if (latestMessage && gardenId) {
            axios.get(`/api/v1/condition/${gardenId}`)
                .then(response => {
                    const condition = response.data[0];
                    const conditions = [
                        { name: 'Air Temperature', value: latestMessage?.air_temperature, threshold: condition?.condition_Temp, condition: 'higher' },
                        { name: 'Air Humid', value: latestMessage?.air_humid, threshold: condition?.condition_Humid, condition: 'lower' },
                        { name: 'Soil Moisture', value: latestMessage?.soil_moisture, threshold: condition?.condition_Amdat, condition: 'lower' },
                    ];

                    conditions.forEach(({ name, value, threshold, condition }) => {
                        value = (typeof (value) != 'number') ? parseFloat(value) : value;
                        threshold = parseFloat(threshold);

                        if (value !== undefined && ((condition === 'higher' && value > threshold) || (condition === 'lower' && value < threshold))) {
                            notification.open({
                                message: 'Threshold Alert',
                                description: `${name} data ${condition} than the threshold. Current value: ${value}`,
                                placement: "bottomRight",
                            });
                        }
                    });
                })
                .catch(error => console.error(error));
        }
    }, [latestMessage, gardenId]);

    return null;
}

export default ThresholdAlert;