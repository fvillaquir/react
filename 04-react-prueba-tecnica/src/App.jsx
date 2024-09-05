import './App.css'
import {useCatImage} from './hooks/useCatImage.js'
import {useCatFact} from './hooks/useCatFact.js'

//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`


function App() {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({fact})

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Cat Facts</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}

export default App
