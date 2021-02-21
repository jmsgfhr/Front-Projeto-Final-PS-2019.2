/* eslint-disable react/button-has-type */
import React from 'react';
import '../../ui/ui.css';
import './forgot.css';
import PanelLeft from '../panelLeft/panelLeft';

export default function Forgot() {
  return (
    <section className="forgot">
      <PanelLeft />
      <div className="forgotContent">
        <h2 className="formTitle">Recuperar senha</h2>
        <form className="formForgot">
          <input className="forgotEmail" placeholder="email" />
          <button className="forgotSubmit">ENVIAR</button>
        </form>
      </div>
    </section>
  );
}
