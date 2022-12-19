import { Link, Outlet, useNavigate } from 'react-router-dom'
import { Spin } from 'antd'
import { Suspense } from 'react'
import { toggleTheme } from './utils'
import './index.scss'

export default function Layout() {
  const navigate = useNavigate()
  return (
    <div className="layout">
      <div id="sidebar">
        <ul>
          <li
            onClick={() => {
              navigate('home/1')
            }}
          >
            {/* <Link to={`home/1`}>params参数</Link> */}
            params参数
          </li>
          <li
            onClick={() => {
              navigate('about?type=2')
            }}
          >
            {/* <Link to={`about?type=2`}>search参数</Link> */}
            search参数
          </li>
          <li
            onClick={() => {
              navigate('rank', { state: { status: 3 } })
            }}
          >
            {/* <Link to={`rank`} state={{ status: 3 }}>
              state参数
            </Link> */}
            state参数
          </li>
          <li>
            <Link to={`react-demo`}>react-demo</Link>
          </li>
          <li>
            <Link to={`ts-demo`}>ts-demo</Link>
          </li>
          <li onClick={toggleTheme}>一键换肤</li>
        </ul>
      </div>
      <div id="detail">
        <Suspense
          fallback={
            <div className="screen">
              <Spin size="large" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}
