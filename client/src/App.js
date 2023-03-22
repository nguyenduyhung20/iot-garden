import React, {useEffect, useState} from 'react'
import LatestMessage from './components/LatestMessage'
import axios from 'axios';

// we are using a simple polling mechanism to fetch the latest message every 5 seconds
// A better approach would be to use a real-time communication protocol like WebSockets
// to receive updates from the server as soon as they happen.
function App() {
	const [message, setMessage] = useState('');

	useEffect(() => {
		const intervalID = setInterval(() => {
			axios.get('/latest-message')
			.then(response => setMessage(response.data.message))
			.catch(error => console.log(error));

	}, 5000);
	return ()=> clearInterval(intervalID);
}, []);


	return (
		<div>
			<LatestMessage message={message}/>
			<LatestMessage message={message}/>
			<LatestMessage message={message}/>
		</div>
	)
}

export default App
