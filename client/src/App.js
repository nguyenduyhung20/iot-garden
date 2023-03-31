import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom"
import classes from "./App.module.scss";
import axios from "axios";
import NavBar from "./components/navbar";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Setting from "./components/Setting";
import Profile from "./components/Profile";



function App() {
	const [message, setMessage] = useState("");
	const [loggedIn, setLoggedIn] = useState(null);

	// Logout function then, will replace it when i have better solution
	function logout() {
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
		<div className={classes["main-content"]}>

			{loggedIn !== null &&(
			<Routes>
				{loggedIn && <NavBar onLogOut={logout}/>}
				<Route
					path="/dashboard"
					element={loggedIn ? <HomeScreen message={message}/> : <Navigate to="/login"/>}
				/>
				<Route
					path="/setting"
					element={loggedIn ? <Setting/> : <Navigate to="/login"/>}
				/>
				<Route
					path="/profile"
					element={loggedIn ? <Profile/> : <Navigate to="/login"/>}
				/>
				<Route
					path="/login"
					element={<Login onLogin={handleLogin}/>}
				/>
				<Route
					path="/signup"
					element={<SignUp/>}
				/>
				 <Route path="*" element={<Navigate to="/login" />} />
			</Routes>
			)}
		</div>
	</Router>

	);
}

export default App;
