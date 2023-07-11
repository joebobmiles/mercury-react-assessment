import React from 'react'
import { createRoot } from 'react-dom'

interface TJoke {
  setup: string
  punchline: string
}

const fetchRandomJoke = async (): Promise<TJoke> => {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke')
  const { setup, punchline } = await response.json()

  return {
    setup,
    punchline
  }
}

const Joke = ({ setup, punchline }: TJoke) => (
  <>
    <p>{setup}</p>
    <p>{punchline}</p>
  </>
)

const App = () => {
  const [ joke, setJoke ] = React.useState<TJoke | null>(null)

  React.useEffect(() => {
    fetchRandomJoke().then((joke) => setJoke(joke))
  }, [])

  return joke ? <Joke {...joke} /> : <p>Loading your joke...</p>
}

const root = createRoot(document.getElementById("app-root"))
root.render(<App />)