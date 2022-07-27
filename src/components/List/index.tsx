import { ITarefa } from "../../types/ITarefas";
import Item from "./item";
import style from './List.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}


function List({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do Dia </h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;