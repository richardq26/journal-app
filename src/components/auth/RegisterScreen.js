import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const msgError = useSelector(state => state.ui.msgError);
  
  const [formValues, handleInputChange, reset] =useForm({name:'', email:'', password:'', password2:''});
  const{name,email,password,password2} = formValues;

  const handleRegister = (e) =>{
    e.preventDefault();
    if(isFormValid()){
      console.log('Form valido')
    }
  }

  const isFormValid=()=>{
    if(name.trim().length===0){
      dispatch(setError('Name is required'));
      return false;
    }else if(validator.isEmail(email)){
      dispatch(setError('Email no válido'));
      console.log('Email no válido');
      return false;
    }else if(password!==password2 || password.length<5){
      dispatch(setError('Las password deben ser iguales y pasar los 5 caracteres'));
      return false;
    }

    dispatch(removeError());
    return true;
  }
  return (
    <>
      <h3 className="auth__title">Registrarse</h3>
      <form onSubmit={handleRegister}>
        {
          msgError && (<div className="auth__alert-error">
          {msgError}
        </div>)
        }
        
      <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleInputChange} 
          value={name}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleInputChange} value={email}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleInputChange} value={password}
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
          onChange={handleInputChange} value={password2}
        />

        <button className="btn btn-primary btn-block mb-5" type="submit">
          Registrarte
        </button>

       
        <Link to="/auth/login" className="link">
          Ya estás registrado?
        </Link>
      </form>
    </>
  );
};
