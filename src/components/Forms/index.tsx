import React from "react";
import Button from "../buttons";
import style from './Form.module.scss';

class Forms extends React.Component {
    state = {
        tarefa: " ",
        tempo: "00:00:00"
    }

    addTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
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
                    placeholder="O que você quer estudar"
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