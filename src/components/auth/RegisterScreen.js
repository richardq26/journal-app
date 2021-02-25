import React from "react";
import { Link } from 'react-router-dom';
export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Registrarse</h3>
      <form action="">
      <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth__input"
          type="password"
          placeholder="Confirm password"
          name="password2"
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
