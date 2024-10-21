import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchGameById } from '../api'

function GameDetailsPage() {
  const { id } = useParams()
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadGame = async () => {
      try {
        const fetchedGame = await fetchGameById(id)
        setGame(fetchedGame)
        setLoading(false)
      } catch (err) {
        setError('Failed to load game details')
        setLoading(false)
      }
    }
    loadGame()
  }, [id])

  if (loading) return <div className="text-center mt-8">Loading...</div>
  if (error) return <div className="text-center mt-8">{error}</div>
  if (!game) return <div className="text-center mt-8">Game not found</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/3 pr-4">
          <img src={game.image} alt={game.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-2/3 mt-4 md:mt-0">
          <p className="text-xl mb-2">Rating: <span className="badge badge-lg">{game.rating}</span></p>
          <p className="mb-2"><strong>Publisher:</strong> {game.publisher}</p>
          <p className="mb-2"><strong>Release Date:</strong> {game.releaseDate}</p>
          <p className="mb-2"><strong>Platforms:</strong> {game.platforms.join(', ')}</p>
          <p className="mb-4"><strong>Price:</strong> {game.price}</p>
          <p className="mb-4">{game.description}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default GameDetailsPage