import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../Login/LoginPage'
import RegisterPage from '../Register/RegisterPage'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
])

export default Router
