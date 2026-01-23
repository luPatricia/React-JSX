import './formulario-de-evento.css';
import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { CampoDeEntrada } from '../CampoDeEntrada';
import { Label } from '../Label';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';



export function FormularioDeEvento() {

    return (
        <form className='form-evento'>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>

            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
                    <CampoDeEntrada type="text" id='nome' placeholder='Summer dev hits' name='nomeEvento' />
                </CampoDeFormulario>


                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">Data do Evento</Label>
                    <CampoDeEntrada type="date" id='nome' name='dataEvento' />
                </CampoDeFormulario>

                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">Data do Evento</Label>
                    <ListaSuspensa>
                        
                    </ListaSuspensa>
                </CampoDeFormulario>


            </div>

            <div className="acoes">
                 <Botao>
                       Criar evento
                 </Botao>
            </div>



        </form>
    )
}