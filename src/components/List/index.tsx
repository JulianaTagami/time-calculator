import { ITarefa } from "../../types/ITarefas";
import Item from "./item";
import style from './List.module.scss';


function List({ tarefas }: {tarefas: ITarefa []}) {
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