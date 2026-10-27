import { Link } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <nav>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/posts">Посты</Link>
    </nav>
  </header>
)

export default Header
