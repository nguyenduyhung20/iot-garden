import React, { useEffect, useState } from "react";
import classes from "./App.module.scss";
import axios from "axios";
import NavBar from "./components/navbar";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

// Sadly we use polling mechanism, will use socket.io next time

function App() {
	const [message, setMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
	const token = localStorage.getItem('token');
	if (token) {
		setLoggedIn(true);
	}
	}, []);

	useEffect(() => {
	if (loggedIn) {

	const intervalID = setInterval(() => {
		axios
		.get("/latest-message")
		.then(response => setMessage(response.data.message))
		.catch(error => console.log(error));
	}, 5000);
	return () => clearInterval(intervalID);
	}
	}, [loggedIn]);

	const renderContent = () => {
		if (loggedIn) {
			return (
				<>
					<NavBar />
					<HomeScreen message={message} />
				</>
			);
		} else {
			return (
				<>
					<Login/>
					<SignUp/>
				</>
			);
		}
	};
	
	return (
	<div className={classes["main-content"]}>
		{renderContent()}
	</div>
	);
}

export default App;
