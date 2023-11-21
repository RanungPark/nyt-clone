import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import HomeScreen from './page/HomeScreen'
import ScrapScreen from './page/ScrapScreen'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HomeScreen />
      },
      {
        path: '/filter',
        element: <HomeScreen />
      },
      {
        path: 'scrap',
        element: <ScrapScreen />
      }
    ]
  }
])

export default router