import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

function App() {

  return (
    <section className='App'>
      <TwitterFollowCard userName="reactjs" initialIsFollowing>
        Francisco Villaquiran
      </TwitterFollowCard>
      <TwitterFollowCard userName="angularjs" initialIsFollowing={false}>
        Johnny Bravo
      </TwitterFollowCard>
    </section>
  )
}

export default App
