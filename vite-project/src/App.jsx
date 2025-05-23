import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './assets/components/header.jsx'
import FirstEntry from './assets/components/entry.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <FirstEntry/>
    </>
  )
}

export default App
