
import './App.css'

// props é um OBJETO que guarda todas as propriedades
// props.children guarda o contéudo que fica entre as tags de abertura e fechamento
function TituloFormulario (props){
  return (
       <h2>
          {props.children}
       </h2>
  )
}

function CampoDeFormulario ({children}){
  return (
       <fieldset>
           {children}
       </fieldset>
  )
}

function Label ({children, htmlFor}){
  return (
       <label htmlFor={htmlFor}>
           {children}
       </label>
  )
}


function Input (props){
  return <input {...props} />
}



function FormularioDeEvento (){

  return (
    <form className='form-evento'>
          <TituloFormulario>
            Preencha para criar um evento:
          </TituloFormulario>
         <CampoDeFormulario>
            <Label htmlFor="nome">Qual é o nome do evento?</Label>
            <input type="text" id='nome' placeholder='Summer dev hits' name='nomeEvento'/>
         </CampoDeFormulario>
    </form>
  )
}




function App() {
  return (
    <main>
       <header>
          <img src="/logo.png" alt="" />
       </header>

       <section>
             <img src="/banner.png" alt="" />
       </section>

       <FormularioDeEvento/>
    </main>
  )
}

export default App
