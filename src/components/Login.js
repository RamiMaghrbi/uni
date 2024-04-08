import React, { useState } from 'react';


function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleLogin = () => {
    // Handle login
  };

  return (
    <div className="container">
      <div className="left-side">
        {/* You can add more content here */}
      </div>
      <div className="right-side">
        <form onSubmit={handleLogin}>
          <label>
            ID:
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
          <label>
            Remember password:
            <input type="checkbox" checked={rememberPassword} onChange={e => setRememberPassword(e.target.checked)} />
          </label>
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
