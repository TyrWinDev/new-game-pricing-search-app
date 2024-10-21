import { useState, useEffect } from 'react'
import GameCard from '../components/GameCard'
import { fetchGames } from '../api'

function HomePage() {
  const [games, setGames] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadGames = async () => {
      try {
        const fetchedGames = await fetchGames()
        setGames(fetchedGames)
        setLoading(false)
      } catch (err) {
        setError('Failed to load games')
        setLoading(false)
      }
    }
    loadGames()
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <div className="container mx-auto px-4">
      <input
        type="text"
        placeholder="Search for games"
        className="input input-bordered w-full max-w-xs mb-8"
        onChange={handleSearch}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  )
}

export default HomePage