
import { Card } from './components/Card'
import { Header } from './components/Header'
import { Rectangle } from './components/Rectangle'

function App() {

  return (
    <>
      <Header />
      <main className='container-app'>
        <article>
          <Rectangle />
          <Card>

          </Card>
        </article>
      </main>
    </>
  )
}

export default App
