import React from 'react';
import '../../ui/ui.css';
import './login.css';
import PanelLeft from '../panelLeft/panelLeft';
import { Link } from 'react-router-dom';
import apiAuth from '../../apiauth';

export default function Login(props) {
    return  (
        <section className='login'>
            <PanelLeft></PanelLeft>
            <div className='loginContent'>
                <h2 className='formTitle'>Área do treinamento</h2>
                <form className='formLogin'>
                    <div className='inputDiv'>
                        <input className='loginName' placeholder='login'></input>
                        <input className='loginPassword' type='password' placeholder='senha'></input>
                    </div>
                    <Link to='/usermenu' className='loginSubmit' onClick={()=> Handleclick()}>ENTRAR</Link>
                </form>
                <Link to="/forgot" className='recoverPassword'>Recuperar Senha</Link>
            </div>
        </section>
    )
}

function Handleclick() {
    apiAuth.post('/auth/login', {
        email: "email@teste.com",
        password: "abcdef"
      })
      .then(function (response) {
        console.log(response.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
}