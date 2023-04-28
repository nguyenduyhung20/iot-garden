import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DataDisplay = ({ gardenId }) => {
    const classes = useStyles();
    const [soilMoistureData, setSoilMoistureData] = useState([]);
    // const [dht20Data, setDht20Data] = useState([]);
    // const [waterPumpData, setWaterPumpData] = useState([]);

    useEffect(() => {
        // fetch data from each of the three endpoints
        axios.get(`/api/soil_moisture/${gardenId}`).then(response => setSoilMoistureData(response.data));
        // axios.get(`/api/dht20/${gardenId}`).then(response => setDht20Data(response.data));
        // axios.get(`/api/water_pump/${gardenId}`).then(response => setWaterPumpData(response.data));
    }, [gardenId]);

    return (
        <div>
            <h2>Soil Moisture Data</h2>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Time</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {soilMoistureData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.time}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Similar tables for dht20Data and waterPumpData go here */}
            {/* ... */}
        </div>
    );
};

export default DataDisplay;
