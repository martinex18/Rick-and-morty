import './App.css'
/* ====== React Router ====== */
import { BrowserRouter, Route, Routes } from 'react-router-dom'
/* ====== Pages ====== */
import { Home } from './components/pages/home/home'
import { Characters } from './components/pages/characters/characters'
import { Episodes } from './components/pages/episodes/episodes'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/characters" element={ <Characters /> } />
          <Route path="/episodes" element={ <Episodes /> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
