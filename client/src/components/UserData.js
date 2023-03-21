import React, {useState, useEffect} from 'react';
import axios from 'axios';


function UserData() {
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        axios.get('/api/user')
        .then(response => setUserData(response.data))
        .catch(error => console.log(error));
    }, []);
    
    return (
        <div>
          <h1>User Data</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, i) => (
                <tr key={i}>
                  <td>{user.user_Name}</td>
                  <td>{user.user_Username}</td>
                  <td>{user.user_Email}</td>
                  <td>{user.user_Phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default UserData