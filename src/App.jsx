import Pomodoro from './components/Pomodoro/Pomodoro'
import Header from './components/Header/Header'
import "./styles/root.css"
import "./styles/index.css"
import './styles/App.css'

function App() {
  return(
    <div className="main">
      <Header></Header>
      <section className="content">
        <Pomodoro></Pomodoro>
      </section>
    </div>
  )
}

export default App
