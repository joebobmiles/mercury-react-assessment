import React from 'react'
import { createRoot } from 'react-dom'

const App = () => (<h1>Hello, World!</h1>)

const root = createRoot(document.getElementById("app-root"))
root.render(<App />)