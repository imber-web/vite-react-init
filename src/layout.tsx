import { Link, Outlet } from 'react-router-dom'
import { Spin } from 'antd'
import { Suspense } from 'react'
import { toggleTheme } from './utils'

export default function Layout() {
  return (
    <div className="layout">
      <div id="sidebar">
        <ul>
          <li>
            <Link to={`home/1`}>params参数</Link>
          </li>
          <li>
            <Link to={`about?type=2`}>search参数</Link>
          </li>
          <li>
            <Link to={`rank`} state={{ status: 3 }}>
              state参数
            </Link>
          </li>
          <li>
            <Link to={`react-demo`}>react-demo</Link>
          </li>
          <li>
            <Link to={`ts-demo`}>ts-demo</Link>
          </li>
          <li onClick={toggleTheme}>一键换肤</li>
          <li>响应式</li>
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
