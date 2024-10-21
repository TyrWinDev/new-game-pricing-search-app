import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import GameDetailsPage from './pages/GameDetailsPage'
import TopDealsPage from './pages/TopDealsPage'
import RandomDealsPage from './pages/RandomDealsPage'
import AuthPage from './pages/AuthPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/game/:id" element={<GameDetailsPage />} />
          <Route path="/top-deals" element={<TopDealsPage />} />
          <Route path="/random-deals" element={<RandomDealsPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App