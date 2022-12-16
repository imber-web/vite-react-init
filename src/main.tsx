import './normalize.css'
import './index.css'
import 'tailwindcss/tailwind.css'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { autoResponse } from './utils'
autoResponse()
// window.addEventListener('resize', autoResponse)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
