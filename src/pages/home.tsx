import { Button } from 'antd'
import { useParams } from 'react-router-dom'

export default function Home() {
  const params = useParams()
  const id = params.id
  return (
    <>
      <h1>{id}</h1>
      <Button>Antd</Button>
    </>
  )
}
