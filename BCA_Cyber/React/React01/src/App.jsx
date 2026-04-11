import { useState } from 'react'
import First from './pages/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>App Controller</h1>
        <First />
      </div>
    </>
  )
}

export default App
