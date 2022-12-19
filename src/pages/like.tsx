import styles from './like.module.scss'
import like from '@/assets/like.png'
import liked from '@/assets/liked.png'
import { useState } from 'react'
const Like: React.FC = () => {
  const [flag, setFlag] = useState(false)
  return (
    <div className="flex pt-40">
      <button
        className={`${styles.button} ${styles.tl_40}`}
        onClick={() => setFlag(!flag)}
      >
        <img src={flag ? like : liked} />
      </button>
      <ul
        onClick={() => setFlag(!flag)}
        className={styles.g_wrap}
        style={
          like
            ? { backgroundImage: `url(${like})` }
            : {
                backgroundImage: `url(${liked})`
              }
        }
      >
        {' '}
        {Array(50)
          .fill(1)
          .map((_, idx) => {
            return <li key={idx}></li>
          })}
      </ul>
    </div>
  )
}
export default Like
