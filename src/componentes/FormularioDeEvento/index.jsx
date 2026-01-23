import './formulario-de-evento.css';
import { TituloFormulario } from '../TituloFormulario';
import { CampoDeFormulario } from '../CampoDeFormulario';
import { CampoDeEntrada } from '../CampoDeEntrada';
import { Label } from '../Label';
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';



export function FormularioDeEvento({ temas, aoSubmeter }) {

    function aoFormSubmetido(formData) {
        console.log('Está na hora de criar um novo evento', formData.get('tema'));
        const evento = {
            capa: formData.get('capa'),
            tema: temas.find(function (item){
                return item.id == formData.get('tema')
            }),
            data: new Date(formData.get('dataEvento')),
            titulo: formData.get('nomeEvento')

        }

        aoSubmeter("esse evento é: ", evento);
    }

    return (
        <form className='form-evento' action={aoFormSubmetido}>
            <TituloFormulario>
                Preencha para criar um evento:
            </TituloFormulario>

            <div className="campos">
                <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
                    <CampoDeEntrada type="text" id='nomeEvento' placeholder='Summer dev hits' name='nomeEvento' />
                </CampoDeFormulario>

               <CampoDeFormulario>
                    <Label htmlFor="nomeEvento">Qual é o endereço da Imagem de capa??</Label>
                    <CampoDeEntrada type="text" id='capa' placeholder='http://....' name='capa' />
                </CampoDeFormulario>


                <CampoDeFormulario>
                    <Label htmlFor="dataEvento">Data do Evento</Label>
                    <CampoDeEntrada type="date" id='dataEvento' name='dataEvento' />
                </CampoDeFormulario>

                

                <CampoDeFormulario>
                    <Label htmlFor="temaEvento">Tema do Evento</Label>
                    
                    <ListaSuspensa id="tema" name="tema" itens={temas} />

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