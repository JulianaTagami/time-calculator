import React from "react";
import { ITarefa } from "../../types/ITarefas";
import Button from "../buttons";
import style from './Form.module.scss';
import { v4 as uuidv4 }

class Forms extends React.Component <{
    setTarefas: React.Dispatch <React.SetStateAction<ITarefa[]>>
}> {
    state = {
        tarefa: " ",
        tempo: "00:00:00"
    }

    addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    ...this.state,
                    selecionado: false,
                    completado: false
                }
            ]
        );
        this.setState({
            tarefa: "",
            tempo: "00:00:00"
        })
    }

    render() {
        return (
            <form className={style.novaTarefa} onSubmit={this.addTarefa.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo
                    </label>

                    <input type="text"
                    name="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
                    id="tarefa"
                    placeholder="O que quer estudar?"
                    required
                    />

                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo
                    </label>
                    <input 
                    type="time"
                    step="1"
                    name="time"
                    value={this.state.tempo}
                    onChange={evento => this.setState({ ...this.state, tempo: evento.target.value })}
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>

            <Button type="submit">
                Adicionar
            </Button>
            </form>
        )
    }
}

export default Forms;