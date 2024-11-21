import React from 'react'

function SignUp() {
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
    <h2>SignUp</h2>
    <input type="text" placeholder="FullName" /><br />

    <input type="text" placeholder="username" /><br />
    <input type="password" placeholder="Password" /> <br />
    <input type="password" placeholder="Confirm-Password" /> <br />
    {/* Cgeck box for male or female */}
    <input type="checkbox" value="male" />Male
    <input type="checkbox" value="female" />Female
   <br />
    <button>Submit</button>
    <p>Have account? <a href="/login">Login</a></p>
  </div>  
</div>
  )
}

export default SignUp