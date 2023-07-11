import React from 'react'
import { createRoot } from 'react-dom/client'
import { Container, Button, Link, CssBaseline } from '@mui/material'

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

const RandomJoke = async () => {
  const { setup, punchline } = await fetchRandomJoke()

  return (
    <>
      <p>{setup}</p>
      <p>{punchline}</p>
    </>
  )
}
const App = () => {
  const [ joke, setJoke ] = React.useState<TJoke | null>(null)

  React.useEffect(() => {
    fetchRandomJoke().then((joke) => setJoke(joke))
  }, [])

  return (
    <>
      <CssBaseline />
      <Container>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button
            onClick={() => null}
            variant="contained"
            disableElevation
          >
            Get a New Random Joke
          </Button>
          <Link href="https://github.com/15Dkatz/official_joke_api">
            View API Docs
          </Link>
        </Container>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
          }}
        >
          {
            joke
              ? <RandomJoke />
              : <p>Loading your joke...</p>
          }
        </Container>
      </Container>
    </>
  )
}

const root = createRoot(document.getElementById("app-root")!)
root.render(<App />)