import React from 'react'
import { createRoot } from 'react-dom'

interface Joke {
  setup: string
  punchline: string
}

const fetchRandomJoke = async (): Promise<Joke> => {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke')
  const { setup, punchline } = await response.json()

  return {
    setup,
    punchline
  }
}

const App = () => (<h1>Hello, World!</h1>)

const root = createRoot(document.getElementById("app-root"))
root.render(<App />)