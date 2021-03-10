import React from "react";
import { Link } from 'react-router-dom';
import { useForm } from "../../hooks/useForm";
import validator from "validator";

export const RegisterScreen = () => {
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
      console.log('Name is required');
      return false;
    }else if(validator.isEmail(email)){
      console.log('Email no válido');
      return false;
    }else if(password!==password2 || password.length<5){
      console.log('Password debe ser de 6 caracteres e iguales')
      return false;
    }
    return true;
  }
  return (
    <>
      <h3 className="auth__title">Registrarse</h3>
      <form onSubmit={handleRegister}>
        <div className="auth__alert-error">
          Error xde
        </div>
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
