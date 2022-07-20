import Button from '../buttons';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';

export default function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma atividade e inicie o cronômeto </p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>


            <Button>
                Começar
            </Button>
        </div>
    )
}