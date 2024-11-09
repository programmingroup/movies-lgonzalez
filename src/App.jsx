import './App.css'
import { useMovies } from './services/movies'

function App() {
  const { movies } = useMovies()

  return (
    <>
      <h1>Random Movies</h1>
      {
        movies ? <section>
          {movies.map(movie =>
            <div key={movie.audio} className='card'>
              <h2>{movie.movie}</h2>
              <p><strong>Date:</strong> {movie.release_date}</p>
              <img src={movie.poster} alt={`Poster of ${movie.movie}`} />
            </div>
          )}
        </section>
          :
          <p>Loading...</p>
      }
    </>
  )
}

export default App
