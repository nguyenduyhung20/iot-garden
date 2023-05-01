import  { useEffect } from "react";
import axios from 'axios';
import { notification } from "antd";

const ThresholdAlert = ({ latestMessage, gardenId }) => {

    useEffect(() => {
        if (latestMessage && gardenId) {
            axios.get(`/api/v1/condition/${gardenId}`)
                .then(response => {
                    const condition = response.data[0];
                    const conditions = [
                        { name: 'Air Temperature', value: latestMessage?.air_temprature, threshold: condition?.condition_Temp },
                        { name: 'Air Humid', value: latestMessage?.air_humid, threshold: condition?.condition_Humid },
                        { name: 'Soil Moisture', value: latestMessage?.soil_moisture, threshold: condition?.condition_Amdat },
                    ];

                    conditions.forEach(({ name, value, threshold }) => {
                        value = (typeof (value) != 'number') ? parseFloat(value) : value;
                        threshold = parseFloat(threshold);

                        if (value !== undefined && value < threshold) {
                            notification.open({
                                message: 'Threshold Alert',
                                description: `${name} data crossed the threshold. Current value: ${value}`,
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