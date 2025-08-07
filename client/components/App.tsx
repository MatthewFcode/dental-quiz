import { Outlet } from 'react-router'

function App() {
  return (
    <div>
      <img
        src="https://teeth.rogershore.net/images/rev/14distcbr.jpg"
        alt="image"
      />
      <Outlet />
    </div>
  )
}

export default App
