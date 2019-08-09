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
          // console.log(response);
            let table = document.querySelector('.indexInstrutorForm');
            // console.log(response.data.length);
            for (let i = 0; i < response.data.length; i++) {
                // const element = response.data[i];
                console.log(response.data[i]);
                
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