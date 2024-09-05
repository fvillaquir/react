import { useState, useEffect } from 'react'
import {getRandomFact} from '../logic/facts.js'
export const useCatFact = () => {
    const [fact, setFact] = useState()
  
    // useEffect(() => {
    //   async function getRandomFact(){
    //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    //     const json = await res.json()
    //     setFact(json.fact)
    //   }
    //   getRandomFact()
    // }, [])
  
    const refreshFact = () => {
      getRandomFact().then(newFact => setFact(newFact))
    }
  
    useEffect(refreshFact, [])
  
    return {fact, refreshFact}
  }