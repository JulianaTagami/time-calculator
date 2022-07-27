import Button from '../buttons';
import Relogio from './Relogio';
import style from './Cronometro.module.scss';

export default function Cronometro({ selecionado}: Props) {
    const [tempo, setTempo] = useState <number>(tempoParaSegundos(String(selecionado?.tempo)));
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