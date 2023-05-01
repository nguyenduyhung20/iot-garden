import { useState } from 'react';
import axios from 'axios';

const ProfileDetails = function ({ userDetails, user, setUser }) {
  const [tempUser, setTempUser] = useState({ ...user });

  const updateTempUserInfo = (key, value) => {
    setTempUser({ ...tempUser, [key]: value });
    console.log('====================================');
    console.log('This is temp user', tempUser);
    console.log('====================================');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`/api/v1/users/${user.user_ID}`, tempUser)
      .then(response => { setUser(tempUser) })
      .catch(console.log)
  }

  return (
    <>
      <div className="backdrop-filter  bg-opacity-30 bg-blue-200 text-gray-800 p-3 font-semibold flex justify-between items-center rounded-lg shadow-lg border border-blue-300 transition-colors duration-200 hover:bg-blue-300 hover:text-white">
        <span className="text-2xl tracking-tight font-extrabold">Edit Profile</span>
      </div><div className="p-3 space-y-4 text-gray-700"></div>
      <form onSubmit={handleSubmit} className="space-y-4">
        {userDetails.map((detail) => (
          <div key={detail.value}>
            <label htmlFor={detail.value} className="block font-semibold text-gray-900 text-lg mb-1">
              {detail.label}
            </label>
            <input
              type="text"
              id={detail.value}
              placeholder={detail.label}
              value={tempUser[detail.value]}
              onChange={(e) => updateTempUserInfo(detail.value, e.target.value)}
              className="w-full p-2 text-gray-800 bg-gray-100 border border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors duration-200"
              readOnly={detail.value === 'user_Username' || detail.value === 'user_Role'}
            />
          </div>
        ))}
        <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors duration-200 focus:outline-none">Confirm Changes</button>
      </form>
    </>

  );
};

export default ProfileDetails;