import axios from 'axios'
import postsUrl from './data/posts.json?url'

const api = axios.create({ baseURL: postsUrl })

export default api
