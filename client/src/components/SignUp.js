import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Input from './Input';

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
		<div className="flex items-center justify-center h-screen bg-green-100">
			<div className="w-full max-w-md bg-white p-8 rounded-md shadow-md border-2 border-blue-200 transition-color duration-500 hover:border-green-300">
				<h1 className="font-bold text-3xl mb-6 text-center">Sign Up</h1>
				<form className="space-y-6" onSubmit={handleSubmit}>
					<Input label="Name:" type="text" value={name} onChange={e => setName(e.target.value)} />
					<Input label="Username:" type="text" value={username} onChange={e => setUsername(e.target.value)} />
					<Input label="Password:" type="password" value={password} onChange={e => setPassword(e.target.value)} />
					<Input label="Confirm Password:" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
					<button className="py-2 px-6 bg-white border-2 border-blue-200 text-black rounded-md hover:bg-green-300  hover:border-green-500 transition-colors duration-200 w-full" type="submit">Sign Up</button>
				</form>
			</div>
		</div>
	);
}

export default SignUp;
