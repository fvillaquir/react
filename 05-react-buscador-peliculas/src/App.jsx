import './App.css'
import { useEffect, useState, useRef, useCallback } from 'react'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }
    if(search === ''){
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('No puede ser menor a 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error}
}


function App() {
  const [sort, setSort] = useState(false)

  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({search, sort})

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({search})
    }, 300)
  , [getMovies])
  const handleSubmit = (event) => {
    event.preventDefault()
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // const {query} = Object.fromEntries(new window.FormData(event.target))
    getMovies({search})
  }

  const handleSort = () => {
    setSort(prevState => !prevState)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input style={{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search} name='query' placeholder='Avengers, Star Wars...' />
          <input type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {
        loading ? <p>Cargando...</p> : <Movies movies={movies}/>
        }
        
      </main>
    </div>
  )
}

export default App
