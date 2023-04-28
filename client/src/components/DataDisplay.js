import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Spin, Table } from 'antd';
import moment from 'moment';

const DataDisplay = ({ gardenId }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({
        soilMoistureData: null,
        dht20Data: null,
        waterPumpData: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const { data: soilMoistureData } = await axios.get(`/api/v1/soil-moisture/${gardenId}`);
                const { data: dht20Data } = await axios.get(`/api/v1/dht20/${gardenId}`);
                const { data: waterPumpData } = await axios.get(`/api/v1/water-pump/${gardenId}`);
                const timeOffset = 0;

                // Format the date for each data point
                const formattedSoilMoistureData = soilMoistureData.map(data => ({
                    ...data,
                    soil_moisture_Time: moment(data.soil_moisture_Time).utcOffset(timeOffset).format('YYYY-MM-DD HH:mm:ss'),
                }));

                const formattedDht20Data = dht20Data.map(data => ({
                    ...data,
                    dht_Time: moment(data.dht_Time).utcOffset(timeOffset).format('YYYY-MM-DD HH:mm:ss'),
                }));

                const formattedWaterPumpData = waterPumpData.map(data => ({
                    ...data,
                    water_pump_Time: moment(data.water_pump_Time).utcOffset(timeOffset).format('YYYY-MM-DD HH:mm:ss'),
                }));
                setData({
                    soilMoistureData: formattedSoilMoistureData,
                    dht20Data: formattedDht20Data,
                    waterPumpData: formattedWaterPumpData,
                });
            } catch (err) {
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [gardenId]);

    if (isLoading) {
        return <Spin />;
    }

    // Define the columns for your tables
    const soilMoistureColumns = [
        { title: 'Time', dataIndex: 'soil_moisture_Time', key: 'time' },
        { title: 'Value', dataIndex: 'soil_moisture_Value', key: 'value' },
    ];

    const dht20Columns = [
        { title: 'Time', dataIndex: 'dht_Time', key: 'time' },
        { title: 'Temperature', dataIndex: 'dht_Temp', key: 'temp' },
        { title: 'Humidity', dataIndex: 'dht_Humid', key: 'humid' },
    ];

    const waterPumpColumns = [
        { title: 'Time', dataIndex: 'water_pump_Time', key: 'time' },
        { title: 'Value', dataIndex: 'water_pump_Value', key: 'value' },
    ];

    return (
        <div>
            <Card title="Soil Moisture Data">
                <Table dataSource={data.soilMoistureData} columns={soilMoistureColumns} rowKey="soil_moisture_Time" />
            </Card>
            <Card title="DHT20 Data">
                <Table dataSource={data.dht20Data} columns={dht20Columns} rowKey="dht_Time" />
            </Card>
            <Card title="Water Pump Data">
                <Table dataSource={data.waterPumpData} columns={waterPumpColumns} rowKey="water_pump_Time" />
            </Card>
        </div>
    );
};

export default DataDisplay;
