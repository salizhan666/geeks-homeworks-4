import { Link } from 'react-router-dom'
import { Button } from 'antd'

const NotFound = () => (
  <>
    <h1>404</h1>
    <p>Страница не найдена.</p>
    <Link to="/">
      <Button type="primary">На главную</Button>
    </Link>
  </>
)

export default NotFound
