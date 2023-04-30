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




function App() {
	const [message, setMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(null);

	// Logout function then, will replace it when i have better solution
	const logout = () => {
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
				axios
					.get("/latest-message")
					.then(response => setMessage(response.data.message))
					.catch(error => console.log(error));
			}, 5000);
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
				<ThresholdAlert message={message} gardenId={1} />
				{true && <NavBar onLogOut={logout} />}
				{true !== null && (
					<div className={classes["routes-content"]}>

						<Routes>

							<Route
								path="/dashboard"
								element={true ? <HomeScreen message={message} /> : <Navigate to="/login" />}
							/>

							<Route
								path="/control"
								element={true ? <Control /> : <Navigate to="/login" />}
							/>
							<Route
								path="/infomation"
								element={true ? <InfomationTree message={message} /> : <Navigate to="/login" />}
							/>

							<Route
								path="/pumpSetting"
								element={true ? <PumpSetting message={message} /> : <Navigate to="/login" />}
							/>

							<Route
								path="/pumpWater"
								element={true ? <Pump /> : <Navigate to="/login" />}
							/>
							<Route
								path="/login"
								element={<Login onLogin={handleLogin} />}
							/>
							<Route
								path="/signup"
								element={<SignUp />}
							/>
							<Route
								path="/history"
								element={true ? <History gardenId={1} /> : <Navigate to="/login" />}
							/>
							<Route
								path="/profile"
								element={true ? <Profile /> : <Navigate to="/login" />}
							/>
							<Route path="*" element={<Navigate to="/login" />} />
						</Routes>
					</div>

				)}
			</div>
		</Router>

	);
}

export default App;
