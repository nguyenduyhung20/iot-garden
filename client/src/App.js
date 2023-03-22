import React, {useEffect, useState} from 'react'
import LatestMessage from './components/LatestMessage'

//we are using a simple polling mechanism to fetch the latest message every 5 seconds
function App() {

	return (

		<div>
			<LatestMessage />
		</div>
	)
}

export default App
