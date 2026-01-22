import './formulario-de-evento.css';
import {TituloFormulario} from '../TituloFormulario';
import {CampoDeFormulario} from '../CampoDeFormulario';
import {CampoDeEntrada} from '../CampoDeEntrada';
import {Label} from '../Label';


export function FormularioDeEvento() {

    return (
        <form className='form-evento'>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>
            <CampoDeFormulario>
                <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
                <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' name='nomeEvento' />
            </CampoDeFormulario>


            <CampoDeFormulario>
                <Label htmlFor="dataEvento">Data do Evento</Label>
                <CampoDeEntrada type="date" id='nome' name='dataEvento' />
            </CampoDeFormulario>
        </form>
    )
}