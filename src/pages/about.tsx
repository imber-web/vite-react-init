import { useSearchParams } from 'react-router-dom'

const About: React.FC = () => {
  const [search] = useSearchParams()
  const type = search.get('type')
  // 还可以这样用
  // const [search1] = useSearchParams('/user?id=001&name=coderbin&age=18')
  // console.log(search1.get('name'))
  return <h1>{type}</h1>
}
export default About
