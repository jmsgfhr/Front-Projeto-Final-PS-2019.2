import React from 'react';
import { Link } from 'react-router-dom';
import './indexInstrutor.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../../App';
import UserMenu from '../../ui/ui';
import api from '../../api';


export default class IndexInstrutor extends React.Component {

  state = {users: []};

  componentDidMount() {
      api.get('/users').then(response => {
        this.setState({ users: [...response.data]});
      });
  }

  render (){
    const user = this.state.users.map((user) => {
      return(
        <tr className='tableRowUser'>
          <td className='tdName'>{user.name}</td>
          <td>{user.kind}</td>
          <td><span className='spanStatus red'>{user.kind}</span></td>
          <td><Link to='/404' className='editBtn'>editar</Link></td>
        </tr>
      )
    });
    
    return(
        <div className='indexInstrutorForm'>
        <div className='searchBar'>
            <h2 className='searchTitle'>Usuário</h2>
            <input className='inputSearch' placeholder='Pesquisa' onKeyUp={() => this.searchFunction()}></input>
        </div>

        <table className='tableUser'>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                  {user}
              </tbody>
            </table>
        </div>
    )
}

  searchFunction = () => {
    var input, filter, list, tableSearch, a, i, txtValue;
    input = document.querySelector('.searchBar .inputSearch');
    filter = input.value.toUpperCase();
    list = document.querySelector(".indexInstrutorForm");
    tableSearch = document.querySelectorAll('.tableRowUser');
    for (i = 0; i < tableSearch.length; i++) {
        a = tableSearch[i].querySelector(".tdName");
        txtValue = a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tableSearch[i].style.display = "";
        } else {
            tableSearch[i].style.display = "none";
        }
    }
  }
}