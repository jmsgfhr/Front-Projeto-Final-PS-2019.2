import React from 'react';
import { Link } from 'react-router-dom';
import './menuLateral.css';

export default class MenuLateral extends React.Component {
    
        expandOnClick = (idButton) => {
            if(idButton === '1'){
                let panel = document.querySelector('#panelOne');
                panel.classList.toggle('display');
            }
            if(idButton === '2'){
                let panel = document.querySelector('#panelTwo');
                panel.classList.toggle('display');
            }
        }

        render(){
        return(
            <section className='menuLateral'>
                <div className='dashTitle'>
                    <h2>Dashboard</h2>
                </div>
                <button className='accordionBtn' onClick={() => this.expandOnClick('1')} >Processos Seletivos</button>
                <div className='panel' id='panelOne'>
                    <Link to="/404"  className='accordionBtnChoices'>Processo Seletivo Vigente</Link>
                    <Link to="/404" className='accordionBtnChoices'>Todos os Processos Seletivos</Link>
                    <Link to="/404" className='accordionBtnChoices'>Criar Processo Seletivo</Link>
                </div>
                <button className='accordionBtn' onClick={() => this.expandOnClick('2')}>Usuários</button>
                <div className='panel' id='panelTwo'>
                    <Link to="/404" className='accordionBtnChoices'>Todos os Usuários</Link>
                    <Link to="/404" className='accordionBtnChoices'>Candidatos</Link>
                    <Link to="/404" className='accordionBtnChoices'>Colaboradores</Link>
                    <Link to="/404" className='accordionBtnChoices'>Criar Usuários</Link>
                </div>
            </section>
        )
    }
}