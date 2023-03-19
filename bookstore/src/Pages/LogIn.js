import React, { useState } from 'react';
import login from "../Pages/login.jpg"

function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className='logingrid'>
        <div className='grid-item-login'>
         <div className='loginpr'>
         <h1>Member Log In</h1>
         </div>   
         <form onSubmit={handleSubmit}>
         <label htmlFor="username">Username:</label>
         <input
           type="text"
           id="username"
           value={username}
           onChange={(event) => setUsername(event.target.value)}
         />
         <br />
         <label htmlFor="password">Password:</label>
         <input
           type="password"
           id="password"
           value={password}
           onChange={(event) => setPassword(event.target.value)}
         />
         <br />
         <button type="submit">Login</button>
         </form>
        </div>
        <div className='grid-item-login'>
          <div className='loginimg'>
           <img src={login} alt="" className="login" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
