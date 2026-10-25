import { useState, useEffect } from 'react'
import { api } from '../../utils/util'
import { toast } from 'react-toastify'
import { PostsCard } from '../PostsCard/PostsCard'
import { Flex, Input, Spin } from "antd"
import styleName from './PostList.module.scss'
import { CreateNewPost } from '../CreateNewPost/CreateNewPost';

export const PostsList = () => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const getPosts = async () => {
        setIsLoading(true)
        try {
            const { data } = await api.get('/posts');
            setPosts(data?.posts ?? [])
        } catch (e) {
            toast.error('Error post loading')
            console.error(`Error ${e}`);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        (async () => {
            await getPosts();
        })();
    }, [])

    const filteredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.trim().toLowerCase())
    )

    return (
        <Flex vertical gap={20}>
            <CreateNewPost setPosts={setPosts}/>
            <Input
                allowClear
                placeholder='Search by title'
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                style={{ maxWidth: 500 }}
            />
            <Spin spinning={isLoading}>
                <Flex className={styleName.postList} gap={10} wrap>
                    {
                        filteredPosts.map((element) => {
                            return <PostsCard key={element?.id} element={element} setPosts={setPosts} />
                        })
                    }
                    {
                        !isLoading && filteredPosts.length === 0 && <h2>No posts found</h2>
                    }
                </Flex>
            </Spin>
        </Flex>
    )
}
