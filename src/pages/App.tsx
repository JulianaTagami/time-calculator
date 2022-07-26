import React, { useState} from 'react';
import Cronometro from '../components/Cronometro';
import Forms from '../components/Forms';
import List from '../components/List';
import { ITarefa } from '../types/ITarefas';
import style from './App.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []> ([]);

  return (
    <div className={style.AppStyle}>
      <Forms setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
