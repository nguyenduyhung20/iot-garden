import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import CheckBox from "./CheckBox";
import jwtDecode from 'jwt-decode';



function Login({ onLogin }) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('/api/v1/login', { username, password, rememberMe })
			.then(response => {
				// Set token on local storage
				const token = response.data.token;
				localStorage.setItem('token', token);

				// Need user id here
				const tokenObject = jwtDecode(token);

				// Save user id on local storage
				localStorage.setItem('userId', tokenObject.id);
				console.log('This is user id: ', localStorage.getItem('userId'));

				// Fetch garden by owner id
				return axios.get(`/api/v1/gardens/owner/${tokenObject.id}`, {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				})
			})
			.then(response => {
				// Response is garden object, set garden id in local storage
				const gardenId = response.data.garden_ID;
				console.log('Type of gardenId: ', typeof (gardenId));
				localStorage.setItem('gardenId', gardenId);

				onLogin();
				navigate('/dashboard')
			})
			.catch(error => console.error(error));
	};

	const handleSignUp = (event) => {
		event.preventDefault()
		navigate('/signup')
	}

	return (
		<div className="flex items-center justify-center h-screen bg-green-100">
			<div className="w-full max-w-md bg-white p-8 rounded-md shadow-md border-2 border-blue-200 transition-color duration-500 hover:border-green-300">
				<h1 className="font-bold text-3xl mb-6 text-center">Login</h1>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<Input
						type="text"
						value={username}
						onChange={e => setUsername(e.target.value)}
						label="Username: "
					/>
					<Input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						label="Password: "
					/>
					<CheckBox
						checked={rememberMe}
						onChange={e => setRememberMe(e.target.checked)}
						label="Remember me:"
					/>
					<div className="flex justify-between w-1/2 mx-auto">
						<button className="py-2 px-4 bg-white border-2 border-blue-200 text-black rounded-md hover:bg-green-300 hover:border-green-400 transition-colors duration-200"
							type="button" onClick={handleSignUp}
						>
							Sign Up
						</button>
						<button className="py-2 px-6 bg-white border-2 border-blue-200 text-black rounded-md hover:bg-green-400  hover:border-green-500 transition-colors duration-200"
							type="submit"
						>
							Login
						</button>
					</div>
				</form>
			</div>

		</div>
	);
};

export default Login;