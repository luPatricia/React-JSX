import { Aside } from "./components/Aside"
import Card from "./components/Card"
import { Container } from "./components/Container"
import { DailyBudeget } from "./components/DailyBudget"
import { Main } from "./components/Main"
import { SavinsStatus } from "./components/SavingsStatus"
import { SearchInput } from "./components/SearchInput"
import { Typography } from "./components/Tipography"
import { Accounts } from "./components/Accounts" 
import { Transactions } from "./components/Transactions"



function App() {


  return (
    <div className="bg-neutral-background min-h-screen">
      <Container>
        <Aside />
        <Main>
          <SearchInput name="q" />

          <div>
            <Typography variant="h1">
              Olá, Vinny!
            </Typography>
            <Typography>
              Veja como estão suas finanças hoje.
            </Typography>
          </div>

          <section className="grid grid-cols-2 items-stretch gap-6">
              <Card>
                  <Card.Header>
                  Orçamento diário disponível
                  </Card.Header>

                  <Card.Body>
                  <DailyBudeget value={42}/>
                  </Card.Body>
              </Card>

              <Card>
                  <Card.Header>
                    Progresso da meta financeira
                  </Card.Header>

                  <Card.Body>
                    <SavinsStatus/>
                  </Card.Body>
              </Card>

              <Card>
                  <Card.Header>
                      Movimentação financeira
                  </Card.Header>

                  <Card.Body>
                     <Transactions/>
                  </Card.Body>
              </Card>

              <Card>
                  <Card.Header>
                    Minhas contas
                  </Card.Header>

                  <Card.Body>
                     <Accounts/>
                  </Card.Body>
              </Card>



          </section>

        </Main>


      </Container>
    </div>
  )
}

export default App
