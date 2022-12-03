import { useLocation } from 'react-router-dom'
const Rank: React.FC = () => {
  const {
    state: { status }
  } = useLocation()
  return (
    <>
      <h1>{status}</h1>
    </>
  )
}
export default Rank
