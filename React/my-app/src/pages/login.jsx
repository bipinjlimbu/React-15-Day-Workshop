import { useState } from 'react';
import myLog from "../style/Login.module.css";
import Button from '../components/button';

const Login = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    alert(`Email: ${email}`);
    e.preventDefault();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={myLog.form}>
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className={myLog.input}/>
        <Button type="submit" className={myLog.button}>Login</Button>
      </form>
    </div>
  );
};

export default Login;