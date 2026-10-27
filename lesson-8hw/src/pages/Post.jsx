import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../api'
import { Button } from 'antd'
import Loader from '../components/Loader'

const Post = () => {
  const { id } = useParams()
  const [state, setState] = useState({ id: null, post: null })

  useEffect(() => {
    api.get()
      .then((res) => {
        const post = res.data.find((item) => item.id === Number(id)) ?? null
        setState({ id, post })
    })
  }, [id])

  if (state.id !== id) return <Loader />
  if (!state.post) return <h1>Пост не найден</h1>

  return (
    <div className="post">
      <h1>{state.post.title}</h1>
      <img src={state.post.image} alt={state.post.title} />
      <p>{state.post.body}</p>
      <Link to="/posts">
        <Button>← Назад к постам</Button>
      </Link>
    </div>
  )
}

export default Post
