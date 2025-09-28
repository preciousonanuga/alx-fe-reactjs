import { useState } from 'react'
import './App.css'
import UserProfile from './components/UserProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Tailwind CSS Integration</h1>
      <UserProfile />
      
    </>
  )
}

export default App
