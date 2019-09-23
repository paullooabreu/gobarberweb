import React from 'react';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <form>
        <input placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já possuo conta</Link>
      </form>
    </>
  );
}
