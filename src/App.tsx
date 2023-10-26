import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import './index.scss'
import AboutPage from './pages/AboutPage/AboutPage'
import MainPage from './pages/MainPage/MainPage'
import { Link } from 'react-router-dom'
import { Suspense } from 'react'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>LOADING</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
