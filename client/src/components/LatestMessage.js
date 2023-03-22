import React, {useState, useEffect} from 'react';
import axios from 'axios';

function LatestMessage() {
    const [message, setMessage] = useState('');
    useEffect(()=> {
        axios.get('/latest-message')
        .then(response => setMessage(response.data.message))
        .catch(error => console.log(error));
    }, []);
    console.log('Latest message:', message);
    return(
        <div>
            <h1>Latest Message</h1>
            <p>{message}</p>
        </div>
    );
}

export default LatestMessage;