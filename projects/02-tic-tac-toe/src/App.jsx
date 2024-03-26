const TURNS = {
  X: 'x',
  O: 'o'
}
const board = Array(9).fill(null)

function App() {
  return(
    <main className="board">
      <h1>Tic tac toe</h1>
      <section className="game">
        {
          board.map((_, index) => {
            <div className="cell"></div>
          })
        }
      </section>
    </main>
    
  )
}

export default App
