import React from 'react';
import './reset.css';
import './ui/ui.css';
import './App.css';
// import axios from 'axios';
import Login from './component/login/login';

// const api = axios.create({
//   baseURL: '#',
// });

// export default api;

function App(props) {
  return (
    <div className="App">
      <Login></Login>
    </div>
  );
}

export default App;
