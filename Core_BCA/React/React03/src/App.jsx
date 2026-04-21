import { useState } from "react"
import First from "./First"

function App() {
  const [i, seti] = useState(0)
  
  return (
    <>

    <button onClick={()=>seti(i+1)}>i = {i}</button>
    <h1>{i}</h1>
    <hr />
    <First />
    </>
  )
}

export default App
