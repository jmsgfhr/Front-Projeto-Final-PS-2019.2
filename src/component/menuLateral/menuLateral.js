import React from 'react';
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
                    <button className='accordionBtnChoices'>Processo Seletivo Vigente</button>
                    <button className='accordionBtnChoices'>Todos os Processos Seletivos</button>
                    <button className='accordionBtnChoices'>Criar Processo Seletivo</button>
                </div>
                <button className='accordionBtn' onClick={() => this.expandOnClick('2')}>Usuários</button>
                <div className='panel' id='panelTwo'>
                    <button className='accordionBtnChoices'>Todos os Usuários</button>
                    <button className='accordionBtnChoices'>Candidatos</button>
                    <button className='accordionBtnChoices'>Colaboradores</button>
                    <button className='accordionBtnChoices'>Criar Usuários</button>
                </div>
            </section>
        )
    }
}