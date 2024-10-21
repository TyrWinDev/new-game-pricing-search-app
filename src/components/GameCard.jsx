import { Link } from 'react-router-dom'

function GameCard({ game }) {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure><img src={game.image} alt={game.title} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {game.title}
          <div className="badge badge-secondary">{game.rating}</div>
        </h2>
        <p>Publisher: {game.publisher}</p>
        <p>Release Date: {game.releaseDate}</p>
        <p>Platforms: {game.platforms.join(', ')}</p>
        <p className="text-lg font-bold text-primary">{game.price}</p>
        <div className="card-actions justify-end">
          <Link to={`/game/${game.id}`} className="btn btn-primary">View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default GameCard