/* eslint-disable no-console */
import React from 'react';
import '../../ui/ui.css';
import './subscribe.css';
import { Link } from 'react-router-dom';
import PanelLeft from '../panelLeft/panelLeft';
import api from '../../api';

function Handleclick() {
  api.post('/users', {
    name: document.querySelector('.subscribeName').value,
    password: document.querySelector('.subscribePassword').value,
    password_confirmation: document.querySelector('.subscribeConfirmPassword').value,
    email: document.querySelector('.subscribeEmail').value,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default function Subscribe() {
  return (
    <section className="subscribe">
      <PanelLeft />
      <div className="subscribeContent">
        <h2 className="formTitle">Inscreva-se</h2>
        <form className="formSubscribe">
          <div className="inputDiv">
            <input className="subscribeName inputSubscribe" placeholder="subscribe" />
            <input className="subscribePassword inputSubscribe" placeholder="senha" />
            <input className="subscribeConfirmPassword inputSubscribe" placeholder="confirme a senha" />
            <input className="subscribeEmail inputSubscribe" placeholder="email" />
          </div>
          <Link to="/" className="subscribeSubmit" onClick={() => Handleclick()}>INCREVER</Link>
        </form>
      </div>
    </section>
  );
}
