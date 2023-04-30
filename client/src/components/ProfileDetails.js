import React, { useState } from 'react';

const ProfileDetails = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    phone: '',
    password: ''
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update user profile details
  };

  return (
    <div style={{ width: '83vw' }}> {/* Remaining viewport width after subtracting navbar */}
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleChange} />
        </label>
        <label>
          Username:
          <input type="text" name="username" value={user.username} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleChange} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={user.address} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="text" name="phone" value={user.phone} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={user.password} onChange={handleChange} />
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfileDetails;
