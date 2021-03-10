import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login, startGoogleLogin, startLoginEmailPassword } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
export const LoginScreen = () => {
  
  const dispatch = useDispatch();
  
  const [formValues, handleInputChange, reset] =useForm({email: 'aicos@gmail.com', password: '123456'});
  const {email, password} = formValues;
  
  const handleLogin = (e) => {
    e.preventDefault();
    // login que está en el actions/auth.js
    console.log(email, password);
    dispatch(startLoginEmailPassword(email,password));
  }

  const handleGoogleLogin=()=>{
    dispatch(startGoogleLogin());
  }

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={handleLogin}>
        <input className="auth__input" type="text" placeholder="email" name="email" onChange={handleInputChange} value={email}/>
        <input className="auth__input" type="password" placeholder="password" onChange={handleInputChange} name="password" value={password}/>

        <button className="btn btn-primary btn-block" type="submit">Ingresar</button>
        
        <div className="auth__social-networks">
          <p>Login with social networks!</p>

          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link to="/auth/register" className="link">Registrarse</Link>
      </form>
    </>
  );
};
