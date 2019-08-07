import React from 'react';
import './reset.css';
import './ui/ui.css';
import './App.css';
import axios from 'axios';
import PanelLeft from './component/panelLeft/panelLeft';

// const api = axios.create({
//   baseURL: '#',
// });

// export default api;

function App(props) {
  return (
    <div className="App">
      <PanelLeft></PanelLeft>
    </div>
  );
}

export default App;
