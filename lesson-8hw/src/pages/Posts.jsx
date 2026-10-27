import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api'
import { Button } from 'antd'
import Loader from '../components/Loader'

const Posts = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    api.get()
      .then((res) => setPosts(res.data))
  }, [])

  if (!posts) return <Loader />

  return (
    <>
      <h1>Посты</h1>
      <div className="cards">
        {posts.map((post) => (
          <div className="card" key={post.id}>
            <img src={post.image} alt={post.title} />
            <div className="card-body">
              <h2>{post.title}</h2>
              <Link to={`/posts/${post.id}`}>
                <Button type="primary">Читать</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Posts
