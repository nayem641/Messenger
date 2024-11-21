import React from 'react'

function Login() {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
  
    }}>
<div style={{
    width: '300px',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
}}>
    <h2>Login</h2>
    <input type="text" placeholder="username" /><br />
    <input type="password" placeholder="Password" /> <br />
   <br />
    <button>Login</button>
    <p>Create account? <a href="/signup">Sign Up</a></p>
  </div>  
</div>
  )
}

export default Login