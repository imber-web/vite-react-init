import { useSearchParams } from 'react-router-dom'

const About: React.FC = () => {
  const [search] = useSearchParams()
  const type = search.get('type')
  return <h1>{type}</h1>
}
export default About
