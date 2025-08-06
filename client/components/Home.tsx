import { useNavigate } from 'react-router'
function Home() {
  const navigate = useNavigate()

  function handleStart() {
    navigate('/quiz')
  }

  return (
    <>
      <h1>🎫 Willa you gotta lock innnnn 🔒</h1>
      <button onClick={handleStart}>Start</button>
    </>
  )
}

export default Home
