// // 只是页面用的不能不能复用的组件还是写这个目录，能复用的写到components
// import { Link, Outlet, useNavigate } from 'react-router-dom'
// import { Spin } from 'antd'
// import { Suspense } from 'react'
// import { toggleTheme } from '../utils'

// export default function Layout() {
//   const navigate = useNavigate()
//   return (
//     <div className="layout">
//       <div id="sidebar">
//         <ul>
//           <li
//             onClick={() => {
//               navigate('home/1')
//             }}
//           >
//             {/* <Link to={`home/1`}>params参数</Link> */}
//             params参数
//           </li>
//           <li
//             onClick={() => {
//               navigate('about?type=2')
//             }}
//           >
//             {/* <Link to={`about?type=2`}>search参数</Link> */}
//             search参数
//           </li>
//           <li
//             onClick={() => {
//               navigate('rank', { state: { status: 3 } })
//             }}
//           >
//             {/* <Link to={`rank`} state={{ status: 3 }}>
//               state参数
//             </Link> */}
//             state参数
//           </li>
//           <li>
//             <Link to={`react-demo`}>react-demo</Link>
//           </li>
//           <li>
//             <Link to={`ts-demo`}>ts-demo</Link>
//           </li>
//           <li onClick={toggleTheme}>一键换肤</li>
//         </ul>
//       </div>
//       <div id="detail">
//         <Suspense
//           fallback={
//             <div className="screen">
//               <Spin size="large" />
//             </div>
//           }
//         >
//           <Outlet />
//         </Suspense>
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react'
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { Divider, Menu, Switch } from 'antd'
import type { MenuProps, MenuTheme } from 'antd/es/menu'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('Navigation Two', '2', <CalendarOutlined />),
  getItem('Navigation Two', 'sub1', <AppstoreOutlined />, [
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Submenu', 'sub1-2', null, [
      getItem('Option 5', '5'),
      getItem('Option 6', '6')
    ])
  ]),
  getItem('Navigation Three', 'sub2', <SettingOutlined />, [
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
    getItem('Option 9', '9'),
    getItem('Option 10', '10')
  ]),
  getItem(
    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
      Ant Design
    </a>,
    'link',
    <LinkOutlined />
  )
]

const Layout: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline')
  const [theme, setTheme] = useState<MenuTheme>('light')

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline')
  }

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light')
  }

  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  )
}

export default Layout
