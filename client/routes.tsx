import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'
import App from './components/App'
import Home from './components/Home'
import Quiz from './components/Quiz'
import { dataset } from '../data/data'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="quiz" element={<Quiz dataset={dataset} />} />
    </Route>,
  ),
)

export default router
