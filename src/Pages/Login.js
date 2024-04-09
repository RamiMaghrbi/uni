import React, { useState } from 'react';
import styles from '../Login.module.css'; // Importing CSS module

function LoginForm() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleLogin = () => {
        // Handle login
    };

    return (
        <div className={styles.loginPage}> {/* Use className from imported CSS module */}
            <div className={styles.loginImage}> {/* Use className from imported CSS module */}
                {/* Image content */}
            </div>
            <div className={styles.loginForm}> {/* Use className from imported CSS module */}
                <h2>Log In</h2>
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
                        <input type="checkbox" checked={rememberPassword} onChange={e => setRememberPassword(e.target.checked)} />
                        &nbsp;
                        Remember password
                    </label>
                    <button type="submit">Log In</button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
