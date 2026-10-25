import { Flex, Input, Button } from 'antd'
import { useState } from 'react'
import styleName from './CreateNewPost.module.scss';
import { api } from '../../utils/util';
import { toast } from 'react-toastify';

const { TextArea } = Input;

export const CreateNewPost = ({ setPosts }) => {

    const [userPostName, setUserPostName] = useState("");
    const [userPostBody, setUserPostBody] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async () => {
        const title = userPostName.trim();
        const text = userPostBody.trim();

        if (!title || !text) {
            toast.warning('Fill in both title and text');
            return;
        }

        setIsLoading(true);
        try {
            const { data } = await api.post('/posts/add', {
                title,
                userId: 5,
                body: text
            });

            setPosts(prev => [{ ...data, id: Date.now() }, ...prev]);

            setUserPostName("");
            setUserPostBody("");
            toast.success('Post has been created');
        } catch (e) {
            console.error(e);
            toast.error('Error adding post');
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <Flex gap={10} vertical className={styleName.createNewPost}>
            <h2>Create Post</h2>
            <Input 
                variant='outlined' 
                placeholder='Post title'
                value={userPostName}
                onChange={(event) => setUserPostName(event.target.value)}
            />
            <TextArea
                placeholder="Post text"
                autoSize={{ minRows: 2, maxRows: 6 }}
                value={userPostBody}
                onChange={(event) => setUserPostBody(event.target.value)}
            />
            <Button type='primary' onClick={onSubmit} loading={isLoading} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send'}
            </Button>
        </Flex>
    )
}
