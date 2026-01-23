<<<<<<< HEAD
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { FabButton } from "./components/FabButton"
import { Dialog } from "./components/Dialog"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"



const todos = [
  {
    id: 1,
    description: "JSX e componentes",
    completed: false,
    createdAt: "2022-10-31"
  },
  {
    id: 2,
    description: "Props, state e hooks",
    completed: false,
    createdAt: "2022-10-31"
  },
  {
    id: 3,
    description: "Ciclo de vida dos componentes",
    completed: false,
    createdAt: "2022-10-31"
  },
  {
    id: 4,
    description: "Testes unitários com Jest",
    completed: false,
    createdAt: "2022-10-31"
  }
]
const completed = [
  {
    id: 5,
    description: "Controle de inputs e formulários controlados",
    completed: true,
    createdAt: "2022-10-31"
  },
  {
    id: 6,
    description: "Rotas dinâmicas",
    completed: true,
    createdAt: "2022-10-31"
  }
]

function App() {

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>

        <Dialog/>
        <ChecklistsWrapper>
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.map(function (t) {
              return <ToDoItem key={t.id} item={t} />
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {completed.map(function (t) {
              return <ToDoItem key={t.id} item={t} />
            })}
          </ToDoList>
          <Footer>
            <FabButton>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
=======

import './App.css'
import { Banner } from './componentes/Banner'
import { FormularioDeEvento } from './componentes/FormularioDeEvento'
import { Tema } from './componentes/Tema'
import { CardEvento } from './componentes/CardEvento'
import { useState } from 'react'


function App() {


  const temas = [
    {
      id: 1,
      nome: 'front-end'
    },

    {
      id: 2,
      nome: 'back-end'
    },

    {
      id: 3,
      nome: 'devops'
    },

    {
      id: 4,
      nome: 'inteligência artificial'
    },

    {
      id: 5,
      nome: 'data science'
    },

    {
      id: 6,
      nome: 'cloud'
    },


  ]


  const [eventos, setEventos] = useState ([
     {
       capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
       tema: temas[0],
       data: new Date(),
       titulo: 'Mulheres no front'
     }
  ])

  function adicionarEvento (evento){
    setEventos([...eventos], evento)

  }


  return (
    <main>
      <header>
        <img src="/logo.png" alt="" />
      </header>

      <Banner />

      <FormularioDeEvento temas={temas} aoSubmeter ={adicionarEvento} />
      
      {temas.map(function(item){
         return(
          <section key={item.id}>
           <Tema tema={item} />

           {eventos.map(function (item, index){
              <CardEvento evento={eventos} key={index}/>
      })}
           
         </section>
         )
      })}

      

      {/* <section>
        <Tema tema={temas[1]} />
      </section>

      <section>
        <Tema tema={temas[2]} />
      </section>

      <section>
        <Tema tema={temas[3]} />
      </section>

      <section>
        <Tema tema={temas[4]} />
      </section>

      <section>
        <Tema tema={temas[5]} />
      </section> */}

>>>>>>> b4ade39ac779e0266f26f82048e6a6a6e464f331
    </main>
  )
}

export default App
