/* eslint-disable no-console */
import React from 'react';
import '../../ui/ui.css';
import './login.css';
import { Link } from 'react-router-dom';
import PanelLeft from '../panelLeft/panelLeft';
import apiAuth from '../../apiauth';

function Handleclick() {
  apiAuth.post('/auth/login', {
    email: 'email@teste.com',
    password: 'abcdef',
  })
    .then((response) => {
      console.log(response.data.token);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function Login() {
  return (
    <section className="login">
      <PanelLeft />
      <div className="loginContent">
        <h2 className="formTitle">Área do treinamento</h2>
        <form className="formLogin">
          <div className="inputDiv">
            <input className="loginName" placeholder="login" />
            <input className="loginPassword" type="password" placeholder="senha" />
          </div>
          <Link to="/usermenu" className="loginSubmit" onClick={() => Handleclick()}>ENTRAR</Link>
        </form>
        <Link to="/forgot" className="recoverPassword">Recuperar Senha</Link>
      </div>
    </section>
  );
}
