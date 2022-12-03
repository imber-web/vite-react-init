import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import Root from './root'
import { getAccess } from './services/access'
const Login = React.lazy(() => import('./routes/login'))
const About = React.lazy(() => import('./routes/about'))
const ErrorPage = React.lazy(() => import('./error-page'))
const Contact = React.lazy(() => import('./routes/contact'))
async function loader() {
  const access = (await getAccess()) as string[]
  if (!access.includes('p6')) {
    throw redirect('/login')
  }
  return { access }
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />, //错误路径处理
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact />,
        loader: loader //路由拦截
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  },
  {
    path: 'about',
    element: <About />
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
