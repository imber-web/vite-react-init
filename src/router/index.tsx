import { createBrowserRouter, redirect } from 'react-router-dom'
import { getAccess } from '../services/access'
import { Spin } from 'antd'
import React, { Suspense } from 'react'
import Tsdemo from '@/pages/ts-demo'
import ReactDemo from '@/pages/react-demo'
import Like from '@/pages/like'
const ErrorPage = React.lazy(() => import('@/pages/error-page'))
const Login = React.lazy(() => import('@/pages/login'))
const Layout = React.lazy(() => import('@/pages/layout'))
const Home = React.lazy(() => import('@/pages/home'))
const About = React.lazy(() => import('@/pages/about'))
const Rank = React.lazy(() => import('@/pages/rank'))
const Work = React.lazy(() => import('@/pages/work'))
async function loader() {
  const access = (await getAccess()) as string[]
  if (!access.includes('p')) {
    throw redirect('/login')
  }
  return { access }
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />, //报错处理
    children: [
      {
        path: 'home/:id',
        element: <Home />,
        loader: loader //路由拦截
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'rank',
        element: <Rank />
      },
      {
        path: 'react-demo',
        element: <ReactDemo />
      },
      {
        path: 'ts-demo',
        element: <Tsdemo />
      }
    ]
  },
  {
    path: 'login',
    element: (
      <Suspense
        fallback={
          <div className="screen">
            <Spin size="large" />s
          </div>
        }
      >
        <Login />
      </Suspense>
    )
  },
  {
    path: 'work',
    element: <Work />
  },
  {
    path: 'like',
    element: <Like />
  }
])
export default router
