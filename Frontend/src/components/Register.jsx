import  { useState } from 'react';
import axios from "axios"
import  '../App.css';
import {  useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


const Register = () => {
  const navigate = useNavigate()

  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const handleRegister = async(e) => {
    e.preventDefault();

    const registerUser = {fullname,username,email,password}

   try {
   const regi = await axios.post("http://localhost:5000/register",registerUser)
   if(regi) alert("register successfully")
   navigate("/")
} catch (error) {
    console.log(error);
}

    // Basic validation, you can add more advanced validation as needed
    if (fullname.trim() === '' || username.trim() === '' || email.trim() === '' || password.trim() === '') {
      setIsError(true);
      return;
    }

    // Perform registration logic here (e.g., send a request to your backend)
    console.log('Registering with:', { fullname, username, email, password });

    // Reset state
    setFullname('');
    setUsername('');
    setEmail('');
    setPassword('');
    setIsError(false);
    
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister} action='' className="auth-form">
        <label>
          Full Name:
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        {isError && <p className="error-message">Please fill in all fields.</p>}
        <br />
        <button type="submit"  className="submit-button">Register</button>
      </form>
    </div>
  );
};

export default Register;
