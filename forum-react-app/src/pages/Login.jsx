import React, { useState } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import { authenticateUser } from '../essentials/Authentication';
import { permitLogin } from "../essentials/Utility/";
import { useAuth } from "../hooks/useAuth";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [userDetails, setUserDetails] = useState({firstName: "", lastName: "", id: ""});
  const { setCurrentUser } = useAuth();

  const handleChange = (event) => {
    setUserDetails({...userDetails, [event.target.name]: event.target.value});
    console.log({...userDetails});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await authenticateUser({...userDetails});
    if(res.success) {
      console.log(res);
      permitLogin(res, setCurrentUser);
    }
  };
  
  const createNewAccount = () => {
    console.log("redirecting to...");
    <Navigate to="/signup"/>
  } 

  return (
    <div className={styles["login-container"]}>
      <div className={styles["forum-details-wrapper"]}>
        <h1>forum</h1>
      </div>
      <div className={styles["login-details-wrapper"]}>
        <form 
          onSubmit={handleSubmit}>
          <input 
            name="firstName"
            onChange={handleChange}
            placeholder="Firstname"
          />
          <input 
            name="lastName"
            onChange={handleChange}
            placeholder="Lastname"
          />
          <button 
            className={`${styles["btn"]}`}
            type="submit">Log In
          </button>
          <div className={styles["forgot-password-wrapper"]}>
            <NavLink path="/signup">Forgot password?</NavLink>
          </div>
          <button 
            className={`${styles["btn"]} ${styles["btn-create-account"]}`}
            type="button"
            onClick={createNewAccount}>Create new account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
