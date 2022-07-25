import React, { useState } from "react";
import Item from "./item";
import style from './List.module.scss';

function List() {
    const [tarefas, setTarefas] = useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    },{ 
        tarefa: 'JavaScript',
        tempo: '01:30:00'
    },{ 
        tarefa: 'TypeScript',
        tempo: '03:30:00'
    },{ 
        tarefa: 'Angular',
        tempo: '0:30:00'
    }]);
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
             setTarefas ([...tarefas, { tarefa: "Estudar estado", tempo: "07:30:00"}]) 
            }}> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;