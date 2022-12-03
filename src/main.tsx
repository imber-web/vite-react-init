import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import Contact from './routes/contact'
import Root from './root'
import { getAccess } from './services/access'
import Login from './routes/login'
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
  }
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
