import React  from 'react';

function LatestMessage(props) {
	//console.log('Latest message:', props.message);
	return(
		<div key={props.message}>
			<h1>Latest Message</h1>
			<p>{props.message}</p>
		</div>
	);
}

export default LatestMessage;