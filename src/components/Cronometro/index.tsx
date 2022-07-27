import Button from '../buttons';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from '../../common/utils/date';
import { ITarefa } from '../../types/ITarefas';
import { useEffect, useState } from 'react';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro({ selecionado}: 
    Props) {
    const [tempo, setTempo] = useState <number>();

    useEffect(() => {
        if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma atividade e inicie o cronômeto </p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>

            <Button>
                Começar
            </Button>
        </div>
    )
}