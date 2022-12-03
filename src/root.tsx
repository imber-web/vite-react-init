import { Link, Outlet, useNavigation } from 'react-router-dom'
import styles from './styles/contact.module.css'

export default function Root() {
  const navigation = useNavigation()
  return (
    <div className={styles.contact}>
      <div id="sidebar">
        <h1>Contacts</h1>
        <ul>
          <li>
            <Link to={`contacts/1`}>Your Name</Link>
          </li>
          <li>
            <Link to={`contacts/2`}>Your Friend</Link>
          </li>
          <li>
            <Link to={`about`}>Your Friend</Link>
          </li>
        </ul>
      </div>
      <div id="detail">
        {navigation.state === 'loading' && <div>loading...</div>}
        <Outlet />
      </div>
    </div>
  )
}
