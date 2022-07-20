import React from "react";
import Item from "./item";
import style from './List.module.scss';

function List() {
    const tarefas = [{
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
    }]
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
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