import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from './Input';
import './SignUp.scss';

function SignUp(props) {
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigate = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('/api/v1/signup', { name, username, password })
			.then(response => {
				localStorage.setItem('token', response.data.token);
				navigate('/login');
			})
			.catch(error => console.error(error));
	};

	return (
		<div className="signup-container">
			<h1 className="signup-title">Sign Up</h1>
			<form className="signup-form" onSubmit={handleSubmit}>
				<Input label="Name:" type="text" value={name} onChange={e => setName(e.target.value)} />
				<Input label="Username:" type="text" value={username} onChange={e => setUsername(e.target.value)} />
				<Input label="Password:" type="password" value={password} onChange={e => setPassword(e.target.value)} />
				<Input label="Confirm Password:" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
				<button className="signup-button" type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default SignUp;
