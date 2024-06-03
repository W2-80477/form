'use client'

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Login = () => {
    const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://login-system-umber.vercel.app/api/login', {
        "email":email,
        "password":password
      });
      console.log(response.data);
      router.push("/dashboard")
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br></br>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br></br>
       <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",marginTop:"10px" }}>
       <button type="submit" >Login</button>
       </div>
      </form>
    </div>
  );
};

export default Login;

