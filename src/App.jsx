import { useState, useEffect } from 'react'
import Pomodoro from './components/Pomodoro/Pomodoro'
import './App.css'

function App() {
  return(
    <div className="main-section">
      <h1>Pomodoro app</h1>
      <Pomodoro></Pomodoro>
    </div>
  )
}

export default App
