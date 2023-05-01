import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import classes from "./App.module.scss";
import axios from "axios";
import NavBar from "./components/navbar";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Control from "./components/Control";
import Profile from "./components/Profile";
import InfomationTree from "./components/InfomationTree";
import Pump from "./components/Pump";
import PumpSetting from "./components/PumpSetting";
import History from "./components/History";
import ThresholdAlert from "./components/ThresholdAlert";
import Garden from "./components/Garden";

const POLLING_INTERVAL = 5000;


function App() {
	const [message, setMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(() => !!localStorage.getItem('token'));

	// Garden id of current user
	const gardenId = parseInt(localStorage.getItem('gardenId'));

	// Logout function then, will replace it when i have better solution
	const handleLogout = () => {
		localStorage.removeItem("token");
		setLoggedIn(false);
	}

	const handleLogin = () => {
		setLoggedIn(true);
	}

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setLoggedIn(true);
		} else {
			setLoggedIn(false);
		}
	}, []);

	// Sadly we use polling mechanism, will use socket.io next time
	useEffect(() => {
		if (loggedIn) {
			const intervalID = setInterval(() => {
				axios.get("/latest-message")
					.then(response => setMessage(response.data.message))
					.catch(console.log);
			}, POLLING_INTERVAL);
			return () => clearInterval(intervalID);
		}
	}, [loggedIn]);



	return (
		<Router>
			{/* <div>
				{loggedIn ? (
					<p>You are logged in</p>
				) : (
					<p>You are not logged in</p>
				)}
			</div> */}
			<div className={classes["main-content"]}>
				<ThresholdAlert message={message} gardenId={gardenId} />
				< NavBar onLogOut={handleLogout} />
				<div className={classes["routes-content"]}>
					<Routes>
						<Route
							path="/login"
							element={<Login onLogin={handleLogin} />}
						/>
						<Route
							path="/signup"
							element={<SignUp />}
						/>
						{loggedIn ? (
							<>
								<Route
									path="/dashboard"
									element={<HomeScreen message={message} />}
								/>
								<Route
									path="/control"
									element={<Control />}
								/>
								<Route
									path="/infomation"
									element={<InfomationTree message={message} />}
								/>
								<Route
									path="/pumpSetting"
									element={<PumpSetting message={message} />}
								/>
								<Route
									path="/pumpWater"
									element={<Pump />}
								/>
								<Route
									path="/history"
									element={<History gardenId={gardenId} />}
								/>
								<Route
									path="/profile"
									element={<Profile />}
								/>
								<Route
									path="/garden"
									element={<Garden />}
								/>
								<Route path="*" element={<Navigate to="/dashboard" />} />
							</>
						) : (
							<Route path="*" element={<Navigate to="/login" />} />
						)}
					</Routes>
				</div>
			</div>
		</Router>

	);
}

export default App;
