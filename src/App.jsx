import './App.css'
/* ====== React Router ====== */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* ====== Pages ====== */
import { Home } from './components/pages/home/home'
import { Characters } from './components/pages/characters/characters'
import Credits from './components/pages/credits/credits'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/characters" element={ <Characters /> } />
          <Route path='/credits' element={ <Credits /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
