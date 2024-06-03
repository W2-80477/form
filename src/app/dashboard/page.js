"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://login-system-umber.vercel.app/api/getAllUsers');
        setUsers(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
  <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h2>User Details</h2>
     <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
     <table border="1" style={{padding:"2px"}}>
        <thead style={{padding:"10px"}}>
          <tr>
            <th style={{padding:"10px"}}>Name</th>
            <th style={{padding:"10px"}}>Mobile No</th>
            <th style={{padding:"10px"}}>Email</th>
            <th style={{padding:"10px"}}>Password</th>  
          </tr>
        </thead>
        <tbody style={{padding:"10px"}}>
          {users.map(user => (
            <tr key={user._id}>
              <td style={{padding:"10px"}}>{user.fullName}</td>
              <td style={{padding:"10px"}}>{user.mobileNo}</td>
              <td style={{padding:"10px"}}>{user.email}</td>
              <td style={{padding:"10px"}}>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default Dashboard;
