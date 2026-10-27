import { Link } from 'react-router-dom'
import { Button } from 'antd'

const Home = () => (
  <>
    <h1>Блока по Киберпанку</h1>
    <p>Книги, фильмы, игры и неоновое будущее.</p>
    <Link to="/posts">
      <Button type="primary" size="large">К постам</Button>
    </Link>
  </>
)

export default Home
