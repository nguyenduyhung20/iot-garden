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
				console.log('This is user id: ', tokenObject.id);

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

				// Debug
				// console.log('This is response of garden id fetch: ', response.data);
				// console.log('This is gardenId in local storage: ', localStorage.getItem('gardenId'));

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
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<Input
					type="text"
					value={username}
					onChange={e => setUsername(e.target.value)}
					label="Username: "
				/>
				<br />
				<Input
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					label="Password: "
				/>
				<br />
				<CheckBox
					checked={rememberMe}
					onChange={e => setRememberMe(e.target.checked)}
					label="Remember me:"
				/>
				<br />
				<div>
					<button type="button" onClick={handleSignUp}>Sign Up</button>
					<button type="submit">Login</button>
				</div>

			</form>

		</div>
	);

};

export default Login;