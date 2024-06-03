"use client"
import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {
  let router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://login-system-umber.vercel.app/api/register', {
        fullName,
        email,
        password,
        mobileNo
      });
      router.push("/login")
      console.log(response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        /><br></br>
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
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          required
        /><br></br>
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center",  marginTop:"10px"}}>
        <button type="submit" style={{marginTop:"5px"}}>Register</button>
        <Link href='/login'>login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
