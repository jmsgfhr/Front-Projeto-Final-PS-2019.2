import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './indexInstrutor.css';


const api = axios.create({
  baseURL: 'https://projeto-final-in.herokuapp.com/users',
});


export default class IndexInstrutor extends React.Component {

    render (){
        return(
            <div className='indexInstrutorForm'>
            <div className='searchBar'>
                <h2 className='searchLabel'>Usuário</h2>
                <input className='inputSearch' ></input>
            </div>
                
            </div>
        )
    }
    componentDidMount() {
        api.get('/')
        .then(function (response) {
          // handle success
            let table = document.querySelector('.indexInstrutorForm');
            let tableUsers = document.createElement('table');
            tableUsers.classList.add('tableUser');
            let tableRow = document.createElement('tr');
            let tableUserName = document.createElement('th');
            tableUserName.innerText = 'Nome do Usuário';
            let tableUserType = document.createElement('th');
            tableUserType.innerText = 'Tipo de Usuario';
            let tableUserStatus = document.createElement('th');
            tableUserStatus.innerText = 'Status';
            let tableUserEdit = document.createElement('th');
            tableRow.appendChild(tableUserName);
            tableRow.appendChild(tableUserType);
            tableRow.appendChild(tableUserStatus);
            tableRow.appendChild(tableUserEdit);
            tableUsers.appendChild(tableRow);
            table.appendChild(tableUsers);
            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                let tableRow = document.createElement('tr');
                let tableUserName = document.createElement('td');
                tableUserName.innerText = response.data[i].name;
                let tableUserType = document.createElement('td');
                tableUserType.innerText = response.data[i].kind;
                let tableUserStatus = document.createElement('td');
                let tableUserEdit = document.createElement('td');
                //tableUserStatus.innerText = response.data[i].participations[0].situation;
                tableRow.appendChild(tableUserName);
                tableRow.appendChild(tableUserType);
                tableRow.appendChild(tableUserStatus);
                tableRow.appendChild(tableUserEdit);
                tableUsers.append(tableRow);      
            }
            
            
            
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
}