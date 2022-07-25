import React from "react";
import Button from "../buttons";
import style from './Form.module.scss';

class Forms extends React.Component {
    state = {
        tarefa: " ",
        tempo: "00:00:00"
    }
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa">
                        Adicione um novo estudo

                    </label>
                    <input type="text"
                    name="tarefa"
                    id="tarefa"
                    value={this.state.tarefa}
                    onChange={evento => this.setState({ ...this.state, tarefa: evento.target.value })}
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

            <Button>
                Adicionar
            </Button>
            </form>
        )
    }
}

export default Forms;