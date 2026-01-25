import { Aside } from './components/Aside'
import { Container } from './components/Container'
import { Main } from './components/Main'
import { SearchInput } from './components/SearchInput'
import { Typography } from './components/Typography'


function App() {


  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
           <Typography variant="h1">
               Olá, Vinny!
           </Typography>

          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>


      </Main>
    </Container>
  )
}

export default App
