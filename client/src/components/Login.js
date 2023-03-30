import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import CheckBox from "./CheckBox";

function Login({onLogin}) {
	const [username, setUsername] = useState('');
	const [password,setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('/api/v1/login', {username, password, rememberMe})
		.then(response => {
			localStorage.setItem('token', response.data.token);
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
				<br/>
				<Input
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					label="Password: "
				/>
				<br/>
				<CheckBox
					checked = {rememberMe}
					onChange={e => setRememberMe(e.target.checked)}
					label="Remember me:"
				/>
				<br/>
				<div>
					<button type="button" onClick={handleSignUp}>Sign Up</button>
					<button type="submit">Login</button>
				</div>
				
			</form>
			
		</div>
	);

};

export default Login;