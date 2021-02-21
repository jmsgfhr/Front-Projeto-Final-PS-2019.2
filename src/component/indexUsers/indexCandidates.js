/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  Link,
} from 'react-router-dom';
import './indexInstrutor.css';
import api from '../../api';

export default class IndexCandidate extends React.Component {
  constructor() {
    super();
    // eslint-disable-next-line react/no-unused-state
    this.state = { user: [] };
  }

  componentDidMount() {
    api.get('/users').then((response) => {
      this.setState({ users: [...response.data] });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  searchFunction() {
    const input = document.querySelector('.searchBar .inputSearch');
    const filter = input.value.toUpperCase();
    const tableSearch = document.querySelectorAll('.tableRowUser');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < tableSearch.length; i++) {
      const a = tableSearch[i].querySelector('.tdName');
      const txtValue = a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tableSearch[i].style.display = '';
      } else {
        tableSearch[i].style.display = 'none';
      }
    }
  }

  render() {
    // eslint-disable-next-line no-shadow
    const user = this.state.users.map((users) => {
      if (users.kind === 'diretor') {
        return null;
      }
      return (
        <tr className="tableRowUser">
          <td className="tdName">{user.name}</td>
          <td>{user.kind}</td>
          <td><span className="spanStatus red">{user.kind}</span></td>
          <td><Link to="/404" className="editBtn">editar</Link></td>
        </tr>
      );
    });

    return (
      <div className="indexInstrutorForm">
        <div className="searchBar">
          <h2 className="searchTitle">Usuário</h2>
          <input className="inputSearch" placeholder="Pesquisa" onKeyUp={() => this.searchFunction()} />
        </div>

        <table className="tableUser">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {user}
          </tbody>
        </table>
      </div>
    );
  }
}
