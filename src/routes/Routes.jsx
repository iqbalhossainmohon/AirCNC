import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layours/Main'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
])
