import React from 'react';
import Cronometro from '../components/Cronometro';
import Forms from '../components/Forms';
import List from '../components/List';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      <Forms/>
      <List/>
      <Cronometro />
    </div>
  );
}

export default App;
