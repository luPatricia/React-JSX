
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




function FormularioDeEvento (){

  return (
    <form className='form-evento'>
          <TituloFormulario>
            Preencha para criar um evento:
          </TituloFormulario>
         <fieldset>
            <label htmlFor="nome">Qual é o nome do evento?</label>
            <input type="text" id='nome' placeholder='Summer dev hits'/>
         </fieldset>
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
