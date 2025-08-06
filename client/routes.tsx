import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Quiz from './components/Quiz'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="quiz" element={<Quiz />} />
    </Route>,
  ),
)

export default router
