import React from 'react';
import '../../ui/ui.css';
import './subscribe.css';
import PanelLeft from '../panelLeft/panelLeft';
import { Link } from 'react-router-dom';
import api from '../../api';

export default function Subscribe(props) {
    return  (
        <section className='subscribe'>
            <PanelLeft></PanelLeft>
            <div className='subscribeContent'>
                <h2 className='formTitle'>Inscreva-se</h2>
                <form className='formSubscribe'>
                    <div className='inputDiv'>
                        <input className='subscribeName inputSubscribe' placeholder='subscribe'></input>
                        <input className='subscribePassword inputSubscribe' placeholder='senha'></input>
                        <input className='subscribeConfirmPassword inputSubscribe' placeholder='confirme a senha'></input>
                        <input className='subscribeEmail inputSubscribe' placeholder='email'></input>
                    </div>
                    <Link to='/' className='subscribeSubmit' onClick={()=> Handleclick()}>INCREVER</Link>
                </form>
            </div>
        </section>
    )
}

function Handleclick() {
    api.post('/users', {
        "name": document.querySelector('.subscribeName').value,
        "password": document.querySelector('.subscribePassword').value,
        "password_confirmation": document.querySelector('.subscribeConfirmPassword').value,
        "email": document.querySelector('.subscribeEmail').value
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}