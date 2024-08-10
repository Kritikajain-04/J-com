import React from 'react'
import  { useState } from 'react';

 export default function Contact() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
    } else {
      setError('');
      // Perform login logic here (e.g., API call)
      console.log('Logging in with:', { email, password });
    }
  };

 
  return (
   <div className="login-container" style={{background:"aqua"}}>
     <h2>Login</h2>
     <form onSubmit={handleLogin}>
       <div>
         <label>Email:</label>
         <input
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
         />
       </div>
       <div>
         <label>Password:</label>
         <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
         />
       </div>
       {error && <p className="error">{error}</p>}
       <button type="submit">Login</button>
     </form>
   </div>
 );
}

