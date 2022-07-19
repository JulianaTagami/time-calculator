import React from "react";

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
        <aside>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3> {item.tarefa}</h3>
                        <span> {item.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;