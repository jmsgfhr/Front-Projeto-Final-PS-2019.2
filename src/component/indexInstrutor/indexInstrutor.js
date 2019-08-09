import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const api = axios.create({
  baseURL: 'https://projeto-final-in.herokuapp.com/users',
});


export default class IndexInstrutor extends React.Component {

    render (){
        return(
            <div className='indexInstrutorForm'>
                
            </div>
        )
    }
    componentDidMount() {
        api.get('/')
        .then(function (response) {
          // handle success
            let table = document.querySelector('.indexInstrutorForm');
            let tableUsers = document.createElement('table');
            let tableUserName = document.createElement('th');
            tableUserName.innerText = 'Nome do Usuário';
            let tableUserType = document.createElement('th');
            tableUserType.innerText = 'Tipo de Usuario';
            let tableUserStatus = document.createElement('th');
            tableUserStatus.innerText = 'Status';
            let tableUserEdit = document.createElement('th');
            tableUserEdit.innerText = " ";
            tableUsers.appendChild(tableUserName);
            tableUsers.appendChild(tableUserType);
            tableUsers.appendChild(tableUserStatus);
            tableUsers.appendChild(tableUserEdit);
            table.appendChild(tableUsers);
            for (let i = 0; i < response.data.length; i++) {
                console.log(response.data[i]);
                let tableRow = document.createElement('tr');
                let tableUserName = document.createElement('td');
                tableUserName.innerText = response.data[i].name;
                let tableUserType = document.createElement('td');
                tableUserType.innerText = response.data[i].kind;
                let tableUserStatus = document.createElement('td');
                //tableUserStatus.innerText = response.data[i].participations[0].situation;
                tableUsers.appendChild(tableUserName);
                tableUsers.appendChild(tableUserType);
                tableUsers.appendChild(tableUserStatus);
                tableUsers.appendChild(tableUserEdit);
                table.appendChild(tableUsers);       
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